import {DrawerNavigationProp} from '@react-navigation/drawer';
import CustomInput from 'components/UI/CustomInput';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IUser} from 'store/user/interfaces/user.interface';
import {ColorsApp} from 'utils/enums';

interface HeaderExploreProps {
  navigation: DrawerNavigationProp<any, any>;
  user: IUser;
}

const HeaderExplore: React.FC<HeaderExploreProps> = ({navigation, user}) => {
  return (
    <View>
      <View style={styles.viewContainerIcons}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={22} />
        </TouchableOpacity>

        <Icon name="notifications-none" size={22} />
      </View>
      <Text style={styles.txtWelcome}>Bienvenid@ de vuelta {user?.name}</Text>
      <View style={styles.viewContainerSearch}>
        <View style={styles.viewContainerInput}>
          <CustomInput
            iconName="search"
            placeholder="¿Qué quieres pedir?"
            keyboardType={'email-address'}
            value={''}
            onChangeText={txt => {
              console.log(txt);
            }}
          />
        </View>
        <TouchableOpacity style={styles.btnFilter}>
          <Icon name="filter-alt" size={24} color={ColorsApp.WHITE_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  txtWelcome: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  viewContainerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  viewContainerInput: {
    flex: 1,
    marginRight: 10,
  },
  btnFilter: {
    justifyContent: 'center',
    // borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    padding: 5,
    backgroundColor: ColorsApp.PRIMARY_COLOR,
  },
});

export default HeaderExplore;
