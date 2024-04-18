import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SocialShare from './SocialShare';

const ItemCheckoff = ({ selectedFile, setCheckoffItems, scavengerHuntId }) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedFile) {
      setIsLoading(true);
      const fetchResponse = async () => {
        try {
          const formData = new FormData();
          formData.append('file', selectedFile);

          const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/processImage`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
          setResponse(response.data);
          setIsLoading(false);
          if (response.data.checkedItem) {
            setCheckoffItems(prevItems => [...prevItems, response.data.checkedItem]);
          }
        } catch (error) {
          console.error('Error fetching response:', error);
          setIsLoading(false);
        }
      };
      fetchResponse();
    }
  }, [selectedFile, setCheckoffItems]);

  return (
    <div className="checkoff-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : response ? (
        <>
          <p>Photo has been approved and the item has been checked off the list.</p>
          <p>Checked off item: {response.checkedItem}</p>
          <SocialShare scavengerHuntId={scavengerHuntId} />
        </>
      ) : (
        <p>Processing image...</p>
      )}
    </div>
  );
};

export default ItemCheckoff;
