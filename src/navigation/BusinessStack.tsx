import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ColorsApp, RoutesNames} from 'utils/enums';
import RegisterBusinessScreen from 'screens/Business/RegisterBusinessScreen';
import BusinessScreen from 'screens/Business/BusinessScreen';
import ProductScreen from 'screens/Business/ProductScreen';
import BusinessShoppingScreen from 'screens/Business/BusinessShoppingScreen';
import CreateProductScreen from 'screens/Business/CreateProductScreen';
import CreateCategorieScreen from 'screens/Business/CreateCategorie';
import {IBusiness} from 'store/business/interfaces/business.interface';

export type BusinessStackParamList = {
  RegisterBusinessScreen: undefined;
  BusinessScreen: {
    business: IBusiness;
  };
  ProductScreen: undefined;
  BusinessShoppingScreen: undefined;
  CreateProductScreen: undefined;
  CreateCategorieScreen: undefined;
};

const Stack = createStackNavigator<BusinessStackParamList>();
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
      <Stack.Screen
        name={RoutesNames.BUSINESS_SCREEN}
        component={BusinessScreen}
      />
      <Stack.Screen
        name={RoutesNames.PRODUCT_SCREEN}
        component={ProductScreen}
      />
      <Stack.Screen
        name={RoutesNames.BUSINESS_SHOPPING_SCREEN}
        component={BusinessShoppingScreen}
      />
      <Stack.Screen
        name={RoutesNames.CREATE_PRODUCT_SCREEN}
        component={CreateProductScreen}
      />
      <Stack.Screen
        name={RoutesNames.CREATE_CATEGORIE_SCREEN}
        component={CreateCategorieScreen}
      />
    </Stack.Navigator>
  );
};

export default BusinessStack;
