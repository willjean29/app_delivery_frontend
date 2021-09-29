import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootStore} from 'store/store';
import {StatusUser} from 'utils/enums';
import {userChecking} from 'store/user/user.actions';
import NotAuthenticatedNavigation from 'navigation/NotAuthenticatedNavigation';
import AuthenticatedNavigation from 'navigation/AuthenticatedNavigation';
import LoadingScreen from 'screens/Loading/LoandingScreen';

interface SwitchNavigationProps {}

const SwitchNavigation: React.FC<SwitchNavigationProps> = () => {
  const dispatch = useDispatch();
  const checking = () => dispatch(userChecking());
  const {status} = useSelector((store: RootStore) => store.user);
  console.log({status});
  useEffect(() => {
    checking();
  }, []);
  if (status === StatusUser.CHECKING) {
    return <LoadingScreen />;
  }
  if (status !== StatusUser.AUTHENTICATED) {
    return <NotAuthenticatedNavigation />;
  } else {
    return <AuthenticatedNavigation />;
  }
};

export default SwitchNavigation;
