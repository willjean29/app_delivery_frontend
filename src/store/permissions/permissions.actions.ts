import {Dispatch} from 'redux';
import {Platform} from 'react-native';
import {
  check,
  request,
  PermissionStatus,
  Permission,
  PERMISSIONS,
} from 'react-native-permissions';

import {
  PERMISSIONS_ASK_PERMISSION,
  PERMISSIONS_CHECK_PERMISSION,
  PermissionsDispatchTypes,
} from 'store/permissions/permissions.types';
import {PermissionsApp} from 'utils/enums';

export const checkPermissions =
  (typePermission: PermissionsApp) =>
  async (dispatch: Dispatch<PermissionsDispatchTypes>) => {
    let permissionsStatus: PermissionStatus = 'unavailable';
    let isIphone = Platform.OS === 'ios' ? true : false;
    switch (typePermission) {
      case PermissionsApp.LOCATION:
        {
          permissionsStatus = isIphone
            ? await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            : await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
        dispatch({
          type: PERMISSIONS_CHECK_PERMISSION,
          payload: {
            permission: PermissionsApp.LOCATION,
            status: permissionsStatus,
          },
        });
        break;
    }
  };

export const askPermissions =
  (typePermission: PermissionsApp) =>
  async (dispatch: Dispatch<PermissionsDispatchTypes>) => {
    let permissionsStatus: PermissionStatus = 'unavailable';
    let isIphone = Platform.OS === 'ios' ? true : false;
    switch (typePermission) {
      case PermissionsApp.LOCATION:
        {
          permissionsStatus = isIphone
            ? await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            : await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
        dispatch({
          type: PERMISSIONS_CHECK_PERMISSION,
          payload: {
            permission: PermissionsApp.LOCATION,
            status: permissionsStatus,
          },
        });
        break;
    }
  };
