import React, { useState } from 'react';
import axios from 'axios';
import Backend from './ServerRequests';
import './css/uploadImage.css';

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    async function uploadPic() {
      try {
        await Backend.uploadPic(selectedFile);
      } catch (error) {
        console.error('Failed to upload pic:', error);
      }
    }

    uploadPic();
    
  };

  return (
    <div>
      <div className="upload-container">
        <h2>Upload Image</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
};

export default UploadImage;
