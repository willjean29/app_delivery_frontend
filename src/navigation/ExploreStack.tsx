import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RoutesNames} from 'utils/enums';
import ExploreScreen from 'screens/Explore/ExploreScreen';
import RestaurantsScreen from 'screens/Explore/RestaurantesScreen';

const Stack = createStackNavigator();
interface ExploreStackProps {}

const ExploreStack: React.FC<ExploreStackProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="RestaurantsScreen" component={RestaurantsScreen} />
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
