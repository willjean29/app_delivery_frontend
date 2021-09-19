import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import NotAuthenticatedNavigation from 'navigation/NotAuthenticatedNavigation';
import {store} from 'store/store';
interface AppProps {}

const App: React.FC<AppProps> = () => {
  console.log('holaaa mundo');

  return (
    <Provider store={store}>
      <NotAuthenticatedNavigation />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
