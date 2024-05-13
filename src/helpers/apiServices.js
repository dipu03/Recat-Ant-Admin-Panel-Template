import axios from 'axios';

const baseURL = 'https://api.example.com'; // Replace with your API base URL

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000, // Timeout after 5 seconds
});

const apiService = {
  async callApi(endpoint, method = 'get', data = null) {
    try {
      const response = await axiosInstance({
        method,
        url: endpoint,
        data,
      });
      return response.data;
    } catch (error) {
      // Handle error
      console.error('API call error:', error);
      throw error; // Re-throw the error to be handled by the caller
    }
  },
};

export default apiService;