import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ColorsApp, RoutesNames} from 'utils/enums';

interface OptionMessageAccountProps {
  message?: string;
  title: string;
  routeName: keyof ReactNavigation.RootParamList;
}

const OptionMessageAccount: React.FC<OptionMessageAccountProps> = ({
  message = '',
  title,
  routeName,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewNewAccount}>
      <Text style={styles.txtNewAccount}>{message}</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [
              {
                name: routeName,
              },
            ],
          })
        }>
        <Text style={styles.txtRegister}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewNewAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  txtNewAccount: {
    color: ColorsApp.PRIMARY_COLOR,
  },
  txtRegister: {
    color: ColorsApp.PRIMARY_COLOR,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    textTransform: 'capitalize',
  },
});

export default OptionMessageAccount;
