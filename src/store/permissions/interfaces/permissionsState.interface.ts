import {PermissionStatus} from 'react-native-permissions';
export interface IPermissionsState {
  locationStatus: PermissionStatus;
  cameraStatus: PermissionStatus;
  galeryStatus: PermissionStatus;
}
