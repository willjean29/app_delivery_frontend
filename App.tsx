import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import NotAuthenticatedNavigation from 'navigation/NotAuthenticatedNavigation';
import {store} from 'store/store';
interface AppProps {}

const App: React.FC<AppProps> = () => {
  console.log('holaaa mundo');

  return (
    <Provider store={store}>
      <NotAuthenticatedNavigation />
    </Provider>
  );
};

export default App;
