import {IUser} from 'store/user/interfaces/user.interface';
import {StatusUser} from 'utils/enums';
export interface IUserState {
  user: IUser | null;
  status: StatusUser;
  errorMessage?: string;
}
