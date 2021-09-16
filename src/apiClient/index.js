import axios from 'axios';

const apiClient = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8882/api/',
  headers: {
    'Content-type': 'application/json',
    Authorization: 'dummy_token',
  },
});

//apiClient.defaults.headers.common['Content-type'] = 'application/json';
//apiClient.defaults.headers.common['Authorization'] = 'dummy_token';

export default apiClient;
