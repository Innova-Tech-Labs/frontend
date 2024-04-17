import React, { Component } from 'react';
import axios from 'axios';

class SendFile extends React.Component {
  state = {
    file: null
  };

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('./newImage', this.state.file);

      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data); // Handle response as needed
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  render() {
    return (
      <div>
        <h2>Add Book</h2>
        <input type="file" onChange={this.handleFileChange} />
        <button onClick={this.handleUpload}>Upload</button>
      </div>
    );
  }
}

export default AddBook;