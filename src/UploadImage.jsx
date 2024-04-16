import { useState } from 'react';
import axios from 'axios';
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

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('http://your-backend-url/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('File uploaded:', response.data);
      // Optionally, you can handle the response from the server here
    } catch (error) {
      console.error('Error uploading file:', error);
    }
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
