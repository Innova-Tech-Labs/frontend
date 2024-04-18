import axios from 'axios';

const backend = {
  async fetchLists() { 
    try {
      const URL = `${import.meta.env.VITE_SERVER_URL}/lists`;
      console.log(`Retrieving Lists from ${URL}`);
      let response = await axios.get(URL);
      console.log('Response:', response.data);
      return [{ title: 'Test List', items: ['Test Item 1', 'Test Item 2'] }];
    } catch (error) {
      console.error('Error retrieving lists:', error);
    }
  },

  async uploadPic() {
    try {
      const URL = `${import.meta.env.VITE_SERVER_URL}/upload`;
      console.log(`Uploading Pic to ${URL}`);
      let response = await axios.post(URL);
      console.log('Server Response:', response);
    } catch (error) {
      console.error('Error retrieving lists:', error);
    }
  }
};

export default backend;