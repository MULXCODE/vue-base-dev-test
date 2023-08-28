// ApiService.js
import axios from 'axios';

const API_BASE_URL = 'https://dog.ceo/api'; // Replace with your API base URL

export default {
  // Define methods for different API endpoints

  // Example method to fetch data from an API endpoint
  async fetchData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/breeds/list/all`);

      return response.data;
    } catch (error) {
      // Handle errors here, e.g., show a notification or log the error
    //   throw error;
    }
  },
};
