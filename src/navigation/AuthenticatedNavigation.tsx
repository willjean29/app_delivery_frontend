import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import ProfileStack from 'navigation/ProfileStack';
import BottomTabStack from 'navigation/BottomTabStack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserDefault from 'assets/img/profile.jpg';
import RegisterBusinessScreen from 'screens/Business/RegisterBusinessScreen';
import {ColorsApp, RoutesNames} from 'utils/enums';
import BusinessStack from 'navigation/BusinessStack';

const Drawer = createDrawerNavigator();
interface AuthenticatedNavigationProps {}

const AuthenticatedNavigation: React.FC<AuthenticatedNavigationProps> = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          sceneContainerStyle: {
            backgroundColor: '#fff',
          },
        })}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name={RoutesNames.BOTTOM_TAB_STACK}
          component={BottomTabStack}
        />
        <Drawer.Screen
          name={RoutesNames.BUSINESS_STACK}
          component={BusinessStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Inicio"
          icon={({focused, size, color}) => (
            <Icon name="home" color={color} size={size} />
          )}
          onPress={() => navigation.navigate(RoutesNames.BOTTOM_TAB_STACK)}
          activeTintColor={ColorsApp.WHITE_COLOR}
          activeBackgroundColor={ColorsApp.PRIMARY_COLOR}
          focused={true}
        />
        <DrawerItem
          label="Mis Direcciones"
          icon={({focused, size, color}) => (
            <Icon name="location-on" color={color} size={size} />
          )}
          pressColor={ColorsApp.PRIMARY_COLOR}
          onPress={() => console.log('press')}
        />
        <DrawerItem
          label="Favoritos"
          icon={({focused, size, color}) => (
            <Icon name="bookmark" color={color} size={size} />
          )}
          onPress={() => console.log('press')}
          pressColor={ColorsApp.PRIMARY_COLOR}
        />

        <DrawerItem
          label="Seleccionar rol"
          icon={({focused, size, color}) => (
            <Icon name="supervisor-account" color={color} size={size} />
          )}
          onPress={() => console.log('press')}
        />
        <DrawerItem
          label="Configuración"
          icon={({focused, size, color}) => (
            <Icon name="settings" color={color} size={size} />
          )}
          onPress={() => console.log('press')}
        />
        <DrawerItem
          label="Información legal"
          icon={({focused, size, color}) => (
            <Icon name="error" color={color} size={size} />
          )}
          onPress={() => console.log('press')}
        />
        <DrawerItem
          label="Registrar repartidor"
          icon={({focused, size, color}) => (
            <Icon name="two-wheeler" color={color} size={size} />
          )}
          onPress={() => console.log('press')}
        />
        <DrawerItem
          label="Registrar tu negocio"
          icon={({focused, size, color}) => (
            <Icon name="store" color={color} size={size} />
          )}
          onPress={() =>
            navigation.navigate(RoutesNames.BUSINESS_STACK, {
              screen: RoutesNames.REGISTER_BUSINESS_SCREEN,
            })
          }
        />
        <DrawerItem
          label="Cerrar Sesión "
          icon={({focused, size, color}) => (
            <Icon name="logout" color={color} size={size} />
          )}
          onPress={() => console.log('press')}
        />
      </DrawerContentScrollView>
      <View
        style={{
          marginHorizontal: 10,
          padding: 10,
          bottom: 15,
          position: 'absolute',
          width: '90%',
        }}>
        <Image
          source={UserDefault}
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
          }}
        />
        <Text style={{fontWeight: 'bold', fontSize: 18, marginVertical: 5}}>
          Jean Osco
        </Text>
        <Text style={{fontSize: 12}}>willjean29@gmail.com</Text>
      </View>
    </View>
  );
};

export default AuthenticatedNavigation;
