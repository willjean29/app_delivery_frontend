import {IPermissionsState} from 'store/permissions//interfaces/permissionsState.interface';
import {PermissionsApp} from '../../utils/enums';
import {
  PERMISSIONS_ASK_PERMISSION,
  PERMISSIONS_CHECK_PERMISSION,
  PermissionsDispatchTypes,
} from 'store/permissions/permissions.types';
const permissionsInitialState: IPermissionsState = {
  locationStatus: 'unavailable',
  cameraStatus: 'unavailable',
  galeryStatus: 'unavailable',
};

const permissionsReducer = (
  state: IPermissionsState = permissionsInitialState,
  action: PermissionsDispatchTypes,
) => {
  switch (action.type) {
    case PERMISSIONS_ASK_PERMISSION:
    case PERMISSIONS_CHECK_PERMISSION:
      return {
        ...state,
        [action.payload.permission]: action.payload.status,
      };
    default:
      return state;
  }
};

export default permissionsReducer;
