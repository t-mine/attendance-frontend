import axios from 'axios';

const http = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8882/api/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default http;
