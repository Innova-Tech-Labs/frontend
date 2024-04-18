import React, { useState } from 'react';
import axios from 'axios';

const SocialShare = ({ scavengerHuntId }) => {
  const [shareLinks, setShareLinks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateLinks = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`/api/share/${scavengerHuntId}`);
      setShareLinks(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error generating share links:', error);
      setError('Failed to generate share links.');
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Share Your Adventure</h3>
      <button onClick={handleGenerateLinks} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Share Links'}
      </button>
      {error && <p>{error}</p>}
      {shareLinks && (
        <div>
          <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">Share on Twitter</a>
          <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">Share on Facebook</a>
          <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">Share on LinkedIn</a>
          <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">Share on WhatsApp</a>
          <a href={`mailto:?subject=Check out my adventure!&body=${encodeURIComponent(shareLinks.email)}`} target="_blank" rel="noopener noreferrer">Share via Email</a>
        </div>
      )}
    </div>
  );
};

export default SocialShare;
