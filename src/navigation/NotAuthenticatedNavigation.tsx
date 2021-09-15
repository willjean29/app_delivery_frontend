import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RoutesNames} from 'utils/enums';
import LoginScreen from 'screens/Account/LoginScreen';
import RegisterScreen from 'screens/Account/RegisterScreen';

export type NotAuthenticatedStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};
declare global {
  namespace ReactNavigation {
    interface RootParamList extends NotAuthenticatedStackParamList {}
  }
}

const Stack = createStackNavigator<NotAuthenticatedStackParamList>();

interface NotAuthenticatedNavigationProps {}

const NotAuthenticatedNavigation: React.FC<NotAuthenticatedNavigationProps> =
  () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name={RoutesNames.LOGIN_SCREEN}
            component={LoginScreen}
          />
          <Stack.Screen
            name={RoutesNames.REGISTER_SCREEN}
            component={RegisterScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default NotAuthenticatedNavigation;
