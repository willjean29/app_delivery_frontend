import {combineReducers} from 'redux';
import UserReducer from 'store/user/user.reducer';
import PermissionsReducer from 'store/permissions/permissions.reducer';
const rootReducer = combineReducers({
  user: UserReducer,
  permissions: PermissionsReducer,
});

export default rootReducer;
