import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import components
import OptionMessageAccount from 'components/Account/OptionMessageAccount';
import Button from 'components/UI/Button';
import CustomInput from 'components/UI/CustomInput';
import {userSigin} from 'store/user/user.actions';
// import utils
import {DimensionsDevice, RoutesNames} from 'utils/enums';
import {RootStore} from 'store/store';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const dispath = useDispatch();
  const {user} = useSelector((state: RootStore) => state.user);
  console.log(user);
  const signIn = () => {
    dispath(
      userSigin({
        email: 'test1@gmail.com',
        password: '123456',
      }),
    );
  };
  return (
    <View style={styles.viewContainer}>
      <CustomInput
        iconName="markunread"
        placeHolder="Correo Electrónico"
        keyboardType={'email-address'}
      />
      <CustomInput
        iconName="https"
        placeHolder="Contraseña"
        secureTextEntry={true}
      />
      <Button title="Ingresar" onPress={() => signIn()} />
      <OptionMessageAccount
        title={'Registrate'}
        message={'¿Si no tienes cuenta?'}
        routeName={RoutesNames.REGISTER_SCREEN}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'center',
    marginTop: DimensionsDevice.WIDTH_DEVICE * 0.25,
    marginBottom: 20,
  },
});

export default LoginForm;
