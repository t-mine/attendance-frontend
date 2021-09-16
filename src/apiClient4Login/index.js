import axios from 'axios';

const apiClient4Login = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8882/api/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default apiClient4Login;
