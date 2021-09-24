import {PermissionStatus} from 'react-native-permissions';
import {PermissionsApp} from 'utils/enums';

export const PERMISSIONS_ASK_PERMISSION = 'PERMISSIONS_ASK_PERMISSION';
export const PERMISSIONS_CHECK_PERMISSION = 'PERMISSIONS_CHECK_PERMISSION';

export type PermissionsAsk = {
  type: typeof PERMISSIONS_ASK_PERMISSION;
  payload: {
    permission: PermissionsApp;
    status: PermissionStatus;
  };
};
export type PermissionsCheck = {
  type: typeof PERMISSIONS_CHECK_PERMISSION;
  payload: {
    permission: PermissionsApp;
    status: PermissionStatus;
  };
};

export type PermissionsDispatchTypes = PermissionsAsk | PermissionsCheck;
