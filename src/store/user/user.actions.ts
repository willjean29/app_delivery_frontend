import axios from 'axios';
import {Dispatch} from 'redux';
import {
  USER_SIGNIN,
  USER_SIGNUP,
  USER_SIGNOUT,
  UserDispathTypes,
} from 'store/user/user.types';
import {UserSigninDto, UserSignupDto} from 'store/user/dtos/user.dto';
import {StatusUser} from 'utils/enums';
const baseURL = 'http://192.168.0.135:4000/api';
export const userSigin =
  (userDto: UserSigninDto) => async (dispatch: Dispatch<UserDispathTypes>) => {
    try {
      const response = await axios.post(`${baseURL}/auth/signin`, userDto);
      console.log(response.data);
      dispatch({
        type: USER_SIGNIN,
        payload: response.data.user,
      });
    } catch (error: any) {
      console.log(error.response);
    }
  };
