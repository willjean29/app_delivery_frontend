import {combineReducers} from 'redux';
import UserReducer from 'store/user/user.reducer';

const rootReducer = combineReducers({
  user: UserReducer,
});

export default rootReducer;
