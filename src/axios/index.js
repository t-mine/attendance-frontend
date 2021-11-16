import axios from 'axios';
import store from '@/store';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

instance.interceptors.request.use((request) => {
  console.log(request);
  request.headers['x-api-key'] = process.env.VUE_APP_API_KEY;
  if (store.state.token) {
    request.headers['Authorization'] = store.state.token;
  }
  return request;
});

export default instance;
