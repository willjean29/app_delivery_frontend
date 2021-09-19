import {Dispatch} from 'redux';
import {showMessage} from 'react-native-flash-message';
import api from 'api/api';
import {
  USER_SIGNIN,
  USER_SIGNUP,
  USER_SIGNOUT,
  UserDispathTypes,
} from 'store/user/user.types';
import {UserSigninDto, UserSignupDto} from 'store/user/dtos/user.dto';
import {ColorsApp, StatusUser} from 'utils/enums';
import {IUserResponse} from 'store/user/interfaces/user.interface';

export const userSigin =
  (userDto: UserSigninDto) => async (dispatch: Dispatch<UserDispathTypes>) => {
    try {
      const response = await api.post<IUserResponse>('/auth/signin', userDto);
      console.log(response.data);
      dispatch({
        type: USER_SIGNIN,
        payload: response.data.user,
      });
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
