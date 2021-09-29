import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseURL = 'http://192.168.0.133:4000/api';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  console.log({token});
  if (token) {
    config.headers['token'] = token;
  }
  return config;
});

export default api;
