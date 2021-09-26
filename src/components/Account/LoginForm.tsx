import React, {useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';
// import components
import OptionMessageAccount from 'components/Account/OptionMessageAccount';
import Button from 'components/UI/Button';
import CustomInput from 'components/UI/CustomInput';
import {userSigin} from 'store/user/user.actions';
// import utils
import {DimensionsDevice, RoutesNames} from 'utils/enums';
import {RootStore} from 'store/store';
import {UserSigninDto} from 'store/user/dtos/user.dto';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const dispatch = useDispatch();
  const signIn = (userDto: UserSigninDto) => dispatch(userSigin(userDto));
  const {user} = useSelector((state: RootStore) => state.user);
  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Ingrese un email válido')
        .required('El email es obligatorio'),
      password: Yup.string().required('El password es obligatorio'),
    }),
    onSubmit: formData => {
      signIn(formData);
    },
  });

  return (
    <View style={styles.viewContainer}>
      <CustomInput
        iconName="markunread"
        placeholder="Correo Electrónico"
        keyboardType={'email-address'}
        value={form.values.email}
        onChangeText={form.handleChange('email')}
        errorMessage={form.errors.email}
      />
      <CustomInput
        iconName="https"
        placeholder="Contraseña"
        secureTextEntry={true}
        value={form.values.password}
        onChangeText={form.handleChange('password')}
        errorMessage={form.errors.password}
      />
      <Button title="Ingresar" uppercase onPress={form.handleSubmit} />
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
