import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ColorsApp, RoutesNames} from 'utils/enums';
import RegisterBusinessScreen from 'screens/Business/RegisterBusinessScreen';

const Stack = createStackNavigator();
interface BusinessStackProps {}

const BusinessStack: React.FC<BusinessStackProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: ColorsApp.WHITE_COLOR},
      }}>
      <Stack.Screen
        name={RoutesNames.REGISTER_BUSINESS_SCREEN}
        component={RegisterBusinessScreen}
      />
    </Stack.Navigator>
  );
};

export default BusinessStack;
