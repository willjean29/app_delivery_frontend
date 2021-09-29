import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import {RootStore, store} from 'store/store';
import {checkPermissions} from 'store/permissions/permissions.actions';
import SwitchNavigation from 'navigation/SwitchNavigation';
import {AppState} from 'react-native';
import {PermissionsApp} from 'utils/enums';
import ModalLoading from 'components/UI/ModalLoading';
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
  const {showModal, messageModal} = useSelector((store: RootStore) => store.ui);
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

  return (
    <>
      {children}
      <ModalLoading isVisible={showModal} message={messageModal} />
    </>
  );
};

export default App;
