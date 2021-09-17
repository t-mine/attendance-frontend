import axios from 'axios';
import store from '@/store';

const instance = axios.create({
  baseURL: '/api/',
});

instance.interceptors.request.use((request) => {
  console.log(request);
  if (store.state.token) {
    request.headers['Authorization'] = store.state.token;
  }
  return request;
});

export default instance;
