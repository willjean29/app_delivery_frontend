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
import {uiShowModal, uiCloseModal} from 'store/ui/ui.actions';
import {
  UI_SHOW_MODAL,
  UI_CLOSE_MODAL,
  UI_SELECT_MENU,
  UiDispatchTypes,
} from 'store/ui/ui.types';

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
      dispatch({
        type: USER_SIGNOUT,
        payload: null,
      });
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('refreshToken');
    }
  };
export const userSignin =
  (userDto: UserSigninDto) =>
  async (dispatch: Dispatch<UserDispathTypes | UiDispatchTypes>) => {
    dispatch({
      type: UI_SHOW_MODAL,
      payload: {
        showModal: true,
        messageModal: 'Iniciando Sesión',
      },
    });
    try {
      const response = await api.post<IUserResponse>('/auth/signin', userDto);
      console.log(response.data);
      dispatch({
        type: USER_SIGNIN,
        payload: response.data.user,
      });
      await AsyncStorage.setItem('token', response.data.token);
      await AsyncStorage.setItem('refreshToken', response.data.refreshToken);
      dispatch({
        type: UI_CLOSE_MODAL,
        payload: {
          showModal: false,
          messageModal: '',
        },
      });
    } catch (error: any) {
      console.log(error.response.data);
      dispatch({
        type: UI_CLOSE_MODAL,
        payload: {
          showModal: false,
          messageModal: '',
        },
      });
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

export const userSignout =
  () => async (dispatch: Dispatch<UserDispathTypes | UiDispatchTypes>) => {
    dispatch({
      type: UI_SHOW_MODAL,
      payload: {
        showModal: true,
        messageModal: 'Cerrando Sesión',
      },
    });

    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const response = await api.post('/auth/signout');
      console.log(response.data);
      dispatch({
        type: USER_SIGNOUT,
        payload: null,
      });
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('refreshToken');
      dispatch({
        type: UI_CLOSE_MODAL,
        payload: {
          showModal: false,
          messageModal: '',
        },
      });
    } catch (error) {
      console.log({error});
      dispatch({
        type: UI_CLOSE_MODAL,
        payload: {
          showModal: false,
          messageModal: '',
        },
      });
      dispatch({
        type: USER_SIGNOUT,
        payload: null,
      });
    }
  };
