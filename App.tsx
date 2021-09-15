import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NotAuthenticatedNavigation from 'navigation/NotAuthenticatedNavigation';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    // <View>
    //   <Text>DELEVERY APP</Text>
    // </View>
    <NotAuthenticatedNavigation />
  );
};

export default App;
