import {Dispatch} from 'redux';
import {showMessage} from 'react-native-flash-message';
import api from 'api/api';
import {
  USER_CHECKING,
  USER_SIGNIN,
  USER_SIGNUP,
  USER_SIGNOUT,
  UserDispathTypes,
} from 'store/user/user.types';
import {UserSigninDto, UserSignupDto} from 'store/user/dtos/user.dto';
import {ColorsApp, StatusUser} from 'utils/enums';
import {IUserResponse} from 'store/user/interfaces/user.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userChecking =
  () => async (dispatch: Dispatch<UserDispathTypes>) => {
    try {
      const response = await api.post<IUserResponse>('/auth');
      dispatch({
        type: USER_CHECKING,
        payload: response.data.user,
      });
      await AsyncStorage.setItem('token', response.data.token);
      await AsyncStorage.setItem('refreshToken', response.data.refreshToken);
    } catch (error: any) {
      console.log(error.response.data);
      // showMessage({
      //   message: 'Error : Obtener sesión',
      //   description: error.response.data.msg || 'Error al obtener sesión',
      //   type: 'danger',
      //   icon: 'danger',
      //   backgroundColor: ColorsApp.PRIMARY_COLOR,
      // });
      dispatch({
        type: USER_SIGNOUT,
        payload: null,
      });
    }
  };
export const userSigin =
  (userDto: UserSigninDto) => async (dispatch: Dispatch<UserDispathTypes>) => {
    try {
      const response = await api.post<IUserResponse>('/auth/signin', userDto);
      console.log(response.data);
      dispatch({
        type: USER_SIGNIN,
        payload: response.data.user,
      });
      await AsyncStorage.setItem('token', response.data.token);
      await AsyncStorage.setItem('refreshToken', response.data.refreshToken);
    } catch (error: any) {
      console.log(error.response.data);
      showMessage({
        message: 'Error : Inicio de Sesión',
        description: error.response.data.msg || 'Error al iniciar sesión',
        type: 'danger',
        icon: 'danger',
        backgroundColor: ColorsApp.PRIMARY_COLOR,
      });
    }
  };

export const userSignup =
  (userDto: UserSignupDto) => async (dispatch: Dispatch<UserDispathTypes>) => {
    try {
      const response = await api.post<IUserResponse>('/auth/signup', userDto);
      console.log(response.data);
      dispatch({
        type: USER_SIGNUP,
        payload: response.data.user,
      });
      await AsyncStorage.setItem('token', response.data.token);
      await AsyncStorage.setItem('refreshToken', response.data.refreshToken);
    } catch (error: any) {
      console.log(error.response.data);
      showMessage({
        message: 'Error : Registrar Usuario',
        description: error.response.data.msg || 'Error al registrar usuario',
        type: 'danger',
        icon: 'danger',
        backgroundColor: ColorsApp.PRIMARY_COLOR,
      });
    }
  };
