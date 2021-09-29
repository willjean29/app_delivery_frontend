import {IUser} from 'store/user/interfaces/user.interface';

export const USER_CHECKING = 'USER_CHECKING';
export const USER_SIGNIN = 'USER_SIGIN';
export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNOUT = 'USER_SINGOUT';

export type UserChecking = {
  type: typeof USER_CHECKING;
  payload: IUser;
};

export type UserSignIn = {
  type: typeof USER_SIGNIN;
  payload: IUser;
};

export type UserSignUp = {
  type: typeof USER_SIGNUP;
  payload: IUser;
};

export type UserSignOut = {
  type: typeof USER_SIGNOUT;
  payload: null;
};

export type UserDispathTypes =
  | UserChecking
  | UserSignIn
  | UserSignUp
  | UserSignOut;
