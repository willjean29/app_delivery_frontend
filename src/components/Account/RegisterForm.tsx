import React from 'react';
import {View, StyleSheet} from 'react-native';
// import components
import Button from 'components/UI/Button';
import CustomInput from 'components/UI/CustomInput';
import OptionMessageAccount from 'components/Account/OptionMessageAccount';
// import utils
import {RoutesNames} from 'utils/enums';

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = () => {
  return (
    <View style={styles.viewContainer}>
      <CustomInput
        placeHolder="Correo Electronico"
        iconName="markunread"
        keyboardType={'email-address'}
      />
      <CustomInput
        placeHolder="Nombres"
        iconName="person"
        autoCapitalize={'words'}
      />
      <CustomInput
        placeHolder="Apellidos"
        iconName="person-outline"
        autoCapitalize={'words'}
      />
      <CustomInput
        placeHolder="Telefono"
        iconName="phone"
        keyboardType={'number-pad'}
      />
      <CustomInput
        placeHolder="Contraseña"
        iconName="https"
        secureTextEntry={true}
      />
      <CustomInput
        placeHolder="Confirmar Contraseña"
        iconName="lock-outline"
        secureTextEntry={true}
      />
      <Button title="Registrarse" />
      <OptionMessageAccount
        title={'Inicia Sesión'}
        message={'Si ya tienes cuenta'}
        routeName={RoutesNames.LOGIN_SCREEN}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'center',
    marginVertical: 20,
  },
});

export default RegisterForm;
