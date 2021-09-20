import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RoutesNames} from 'utils/enums';
import FavoritesScreen from 'screens/Favorites/FavoritesScreen';

const Stack = createStackNavigator();
interface FavoritesStackProps {}

const FavoritesStack: React.FC<FavoritesStackProps> = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
