import React, { useState } from 'react';
import axios from 'axios';

const backend = {
  async fetchLists() { 
    try {
      const URL = `${import.meta.env.VITE_SERVER_URL}/lists`;
      console.log(`Retrieving Lists from ${URL}`);
      let response = await axios.get(URL);
      console.log('Response:', response.data);
      return [{ title: 'Test List', items: [{ name: 'Test Item 1', imagePath: '' }, { name: 'Test Item 2', imagePath: '' }] }];
    } catch (error) {
      console.error('Error retrieving lists:', error);
    }
  },

  async uploadPic(selectedFile) {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const URL = `${import.meta.env.VITE_SERVER_URL}/photos/upload`;
      console.log('Posting to', URL);
      const response = await axios.post(URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('File uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }
};

export default backend;