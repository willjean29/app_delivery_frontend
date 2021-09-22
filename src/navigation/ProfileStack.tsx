import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RoutesNames} from 'utils/enums';
import ProfileScreen from 'screens/Profile/ProfileScreen';

const Stack = createStackNavigator();
interface ProfileStackProps {}

const ProfileStack: React.FC<ProfileStackProps> = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={RoutesNames.PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
