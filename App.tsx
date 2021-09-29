import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import {store} from 'store/store';
import {checkPermissions} from 'store/permissions/permissions.actions';
import SwitchNavigation from 'navigation/SwitchNavigation';
import {AppState} from 'react-native';
import {PermissionsApp} from 'utils/enums';
interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Provider store={store}>
      <AppContent>
        <>
          <SwitchNavigation />
          <FlashMessage position="top" />
        </>
      </AppContent>
    </Provider>
  );
};

interface AppContentProps {
  children: React.ReactNode;
}

const AppContent: React.FC<AppContentProps> = ({children}) => {
  const dispatch = useDispatch();

  const check = (permission: PermissionsApp) =>
    dispatch(checkPermissions(permission));
  useEffect(() => {
    check(PermissionsApp.LOCATION);
    AppState.addEventListener('change', state => {
      if (state === 'active') {
        check(PermissionsApp.LOCATION);
      }
    });
  }, []);
  return <>{children}</>;
};

export default App;
