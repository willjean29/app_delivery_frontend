import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseURL = 'http://192.168.0.133:4000/api';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  const refreshToken = await AsyncStorage.getItem('refreshToken');
  console.log({token});
  if (token) {
    config.headers['token'] = token;
    config.headers['refreshToken'] = refreshToken;
  }
  return config;
});

export default api;
