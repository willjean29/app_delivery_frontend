import {combineReducers} from 'redux';
import UserReducer from 'store/user/user.reducer';
import PermissionsReducer from 'store/permissions/permissions.reducer';
import UiReducer from 'store/ui/ui.redurcer';
import CategoriesReducer from 'store/categories/categories.reducer';
import BusinessReducer from 'store/business/business.reducer';
const rootReducer = combineReducers({
  user: UserReducer,
  permissions: PermissionsReducer,
  ui: UiReducer,
  categories: CategoriesReducer,
  business: BusinessReducer,
});

export default rootReducer;
