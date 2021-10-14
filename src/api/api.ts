import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from 'react-native-flash-message';
import {ColorsApp} from 'utils/enums';
const baseURL = 'http://192.168.0.133:4000/api';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  const refreshToken = await AsyncStorage.getItem('refreshToken');
  // console.log({token});
  if (token) {
    config.headers['token'] = token;
    config.headers['refreshToken'] = refreshToken;
  }
  return config;
});

api.interceptors.response.use(
  response => {
    return response;
  },
  async err => {
    if (err.message === 'Network Error') {
      showMessage({
        message: 'Error Server : Network Error',
        description: 'Network Error',
        type: 'danger',
        icon: 'danger',
        backgroundColor: ColorsApp.PRIMARY_COLOR,
      });
      return Promise.reject(err);
    }
    const originalRequest = err.config;
    const jwtExpired = err.response?.data?.details?.name;

    const refreshToken = await AsyncStorage.getItem('refreshToken');

    if (
      refreshToken &&
      !originalRequest._retry &&
      jwtExpired === 'TokenExpiredError'
    ) {
      // console.log({msg: 'llegoo'});
      originalRequest._retry = true;
      return api
        .post('/auth/refresh-token', {refreshToken: refreshToken})
        .then(async response => {
          if (response.status === 200) {
            // console.log({resp: response.data});
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem(
              'refreshToken',
              response.data.refreshToken,
            );
            return api(originalRequest);
          }
          // return Promise.reject(err);
        });
    }
    return Promise.reject(err);
  },
);

export default api;
