import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import NotAuthenticatedNavigation from 'navigation/NotAuthenticatedNavigation';
import AuthenticatedNavigation from 'navigation/AuthenticatedNavigation';
import {store, RootStore} from 'store/store';
import {checkPermissions} from 'store/permissions/permissions.actions';
import {AppState} from 'react-native';
import {PermissionsApp} from 'utils/enums';
interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Provider store={store}>
      <AppContent>
        <>
          {/* <NotAuthenticatedNavigation /> */}
          <AuthenticatedNavigation />
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
  const {locationStatus} = useSelector((state: RootStore) => state.permissions);
  console.log({locationStatus});
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
