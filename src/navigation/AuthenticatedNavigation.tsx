import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileStack from 'navigation/ProfileStack';
import BottomTabStack from 'navigation/BottomTabStack';

const Stack = createStackNavigator();
interface AuthenticatedNavigationProps {}

const AuthenticatedNavigation: React.FC<AuthenticatedNavigationProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabScreens" component={BottomTabStack} />
        <Stack.Screen name="Profile" component={ProfileStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatedNavigation;
