import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RoutesNames} from 'utils/enums';
import MyOrdersScreen from 'screens/Orders/MyOrdersScreen';

const Stack = createStackNavigator();
interface OrdersStackProps {}

const OrdersStack: React.FC<OrdersStackProps> = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={RoutesNames.MY_ORDERS_SCREEN}
        component={MyOrdersScreen}
      />
    </Stack.Navigator>
  );
};

export default OrdersStack;
