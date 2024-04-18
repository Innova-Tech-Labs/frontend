import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './css/itemCheckoff.css'; // no existing file, but if Adam wants to add CSS for styling


const ItemCheckoff = ({ selectedFile, setCheckoffItems }) => {
  const [response, setResponse] = useState(null);


  useEffect(() => {
    // Fetch response from AI API or backend upon component mount
    async function fetchResponse() {
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);


        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/processImage`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        setResponse(response.data);
        // Update the checkoffItems state in the parent component
        if (response.data.checkedItem) {
          setCheckoffItems(prevItems => [...prevItems, response.data.checkedItem]);
        }
      } catch (error) {
        console.error('Error fetching response:', error);
      }
    }
    fetchResponse();
  }, [selectedFile, setCheckoffItems]);


  return (
    <div className="checkoff-container">
      {response ? (
        <>
          <p>Photo has been approved and the item has been checked off the list.</p>
          <p>Checked off item: {response.checkedItem}</p>
        </>
      ) : (
        <p>Processing image...</p>
      )}
    </div>
  );
};


export default ItemCheckoff;