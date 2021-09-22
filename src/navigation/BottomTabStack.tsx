import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreStack from 'navigation/ExploreStack';
import OrdersStack from 'navigation/OrdersStack';
import FavoritesStack from 'navigation/FavoritesStack';
import ProfileStack from 'navigation/ProfileStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ColorsApp, RoutesNames} from 'utils/enums';
const Tab = createBottomTabNavigator();

interface BottomTabStackProps {}

const BottomTabStack: React.FC<BottomTabStackProps> = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) =>
          selectedIcon(route, color, size, focused),
        tabBarActiveTintColor: ColorsApp.PRIMARY_COLOR,
        tabBarInactiveTintColor: ColorsApp.GRAY_COLOR,
        tabBarShowLabel: false,
        tabBarStyle: {...styles.customTabBar},
      })}>
      <Tab.Screen
        name={RoutesNames.EXPLORE_STACK}
        component={ExploreStack}
        options={{title: 'Explorar'}}
      />
      <Tab.Screen
        name={RoutesNames.ORDERS_STACK}
        component={OrdersStack}
        options={{title: 'Mis Ordenes'}}
      />
      <Tab.Screen
        name={RoutesNames.FAVORITES_STACK}
        component={FavoritesStack}
        options={{title: 'Favoritos'}}
      />
      <Tab.Screen
        name={RoutesNames.PROFILE_STACK}
        component={ProfileStack}
        options={{title: 'Cuenta'}}
      />
    </Tab.Navigator>
  );
};

const selectedIcon = (
  route: any,
  color: string,
  size: number,
  focused: boolean,
) => {
  let iconName: string = '';
  let title: string = '';
  switch (route.name) {
    case 'ExploreStack':
      iconName = 'explore';
      title = 'Explorar';
      break;
    case 'OrdersStack':
      iconName = 'description';
      title = 'Mis Ordenes';
      break;
    case 'FavoritesStack':
      iconName = 'bookmark';
      title = 'Favoritos';
      break;
    case 'ProfileStack':
      iconName = 'account-circle';
      title = 'Cuenta';
      break;
    default:
      break;
  }

  return (
    <View
      style={{
        alignItems: 'center',
        marginBottom: focused ? 5 : 0,
      }}>
      <Icon name={iconName} color={color} size={size} />
      <Text
        style={{
          fontSize: 10,
          color: color,
        }}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  customTabBar: {
    position: 'absolute',
    bottom: 20,
    height: 50,
    paddingBottom: 0,
    borderRadius: 10,
    left: '5%',
    right: '5%',
    width: '90%',
    borderTopWidth: 0,
    shadowColor: ColorsApp.BLACK_COLOR,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});

export default BottomTabStack;
