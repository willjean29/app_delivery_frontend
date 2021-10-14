import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
// import components
import Button from 'components/UI/Button';
import CustomInput from 'components/UI/CustomInput';
import OptionMessageAccount from 'components/Account/OptionMessageAccount';
// import utils
import {RoutesNames} from 'utils/enums';
import {useDispatch} from 'react-redux';
import {UserSignupDto} from 'store/user/dtos/user.dto';
import {userSignin, userSignup} from 'store/user/user.actions';

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = () => {
  const dispatch = useDispatch();
  const signUp = (userDto: UserSignupDto) => dispatch(userSignup(userDto));
  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      lastName: '',
      phone: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Ingrese un email válido')
        .required('El email es obligatorio'),
      name: Yup.string().required('El nombre es obligatorio'),
      lastName: Yup.string().required('El apellido es obligatorio'),
      phone: Yup.string().required('El telefono es obligatorio'),
      password: Yup.string()
        .required('El password es obligatorio')
        .min(6, 'La contraseña debe tener 6 caracteres como mínimo')
        .oneOf([Yup.ref('confirmPassword')], 'Las contraseñas no son iguales'),
      confirmPassword: Yup.string()
        .required('El password es obligatorio')
        .min(6, 'La contraseña debe tener 6 caracteres como mínimo')
        .oneOf([Yup.ref('password')], 'Las contraseñas no son iguales'),
    }),
    onSubmit: formData => {
      signUp(formData);
    },
  });
  return (
    <View style={styles.viewContainer}>
      <CustomInput
        placeholder="Correo Electronico"
        iconName="markunread"
        keyboardType={'email-address'}
        value={form.values.email}
        onChangeText={form.handleChange('email')}
        errorMessage={form.errors.email}
      />
      <CustomInput
        placeholder="Nombres"
        iconName="person"
        autoCapitalize={'words'}
        value={form.values.name}
        onChangeText={form.handleChange('name')}
        errorMessage={form.errors.name}
      />
      <CustomInput
        placeholder="Apellidos"
        iconName="person-outline"
        autoCapitalize={'words'}
        value={form.values.lastName}
        onChangeText={form.handleChange('lastName')}
        errorMessage={form.errors.lastName}
      />
      <CustomInput
        placeholder="Telefono"
        iconName="phone"
        keyboardType={'number-pad'}
        value={form.values.phone}
        onChangeText={form.handleChange('phone')}
        errorMessage={form.errors.phone}
      />
      <CustomInput
        placeholder="Contraseña"
        iconName="https"
        secureTextEntry={true}
        value={form.values.password}
        onChangeText={form.handleChange('password')}
        errorMessage={form.errors.password}
      />
      <CustomInput
        placeholder="Confirmar Contraseña"
        iconName="lock-outline"
        secureTextEntry={true}
        value={form.values.confirmPassword}
        onChangeText={form.handleChange('confirmPassword')}
        errorMessage={form.errors.confirmPassword}
      />
      <Button title="Registrarse" uppercase onPress={form.handleSubmit} />
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
