import axios from 'axios';

// Tạo instance của axios với base URL và headers cơ bản
const instance = axios.create({
  baseURL: 'https://hieuaptech.shop/api/',
  headers: {
    'Content-Type': 'application/json',
  }
});


instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});
export default (instance);
