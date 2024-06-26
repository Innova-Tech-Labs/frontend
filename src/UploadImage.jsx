import React, { useState } from 'react';
import axios from 'axios';
import Backend from './ServerRequests';
import './css/uploadImage.css';
import ItemCheckoff from './ItemCheckoff';

const UploadImage = ({ setDescription }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showCheckoff, setShowCheckoff] = useState(false);
  const [checkoffItems, setCheckoffItems] = useState([]);

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
        const response = await Backend.uploadPic(selectedFile);
        setDescription(response.description);
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
      {showCheckoff && <ItemCheckoff selectedFile={selectedFile} setCheckoffItems={setCheckoffItems} />}
    </div>
  );
};

export default UploadImage;
