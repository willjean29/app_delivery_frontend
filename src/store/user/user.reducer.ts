import {IUserState} from 'store/user/interfaces/userState.interface';
import {
  USER_CHECKING,
  USER_SIGNIN,
  USER_SIGNUP,
  USER_SIGNOUT,
  UserDispathTypes,
} from 'store/user/user.types';
import {StatusUser} from 'utils/enums';

const userInitialState: IUserState = {
  user: null,
  status: StatusUser.CHECKING,
  errorMessage: '',
};

const userReducer = (
  state: IUserState = userInitialState,
  action: UserDispathTypes,
) => {
  switch (action.type) {
    case USER_CHECKING:
    case USER_SIGNIN:
    case USER_SIGNUP:
      return {
        ...state,
        user: action.payload,
        status: StatusUser.AUTHENTICATED,
      };
    case USER_SIGNOUT:
      return {
        ...state,
        user: null,
        status: StatusUser.NOT_ATHENTICATED,
      };

    default:
      return state;
  }
};

export default userReducer;
