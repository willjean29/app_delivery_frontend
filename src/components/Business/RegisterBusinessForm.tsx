import Button from 'components/UI/Button';
import CustomInput from 'components/UI/CustomInput';
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {View, Text, StyleSheet} from 'react-native';

interface RegisterBusinessFormProps {}

const RegisterBusinessForm: React.FC<RegisterBusinessFormProps> = () => {
  console.log('register business form');

  const form = useFormik({
    initialValues: {
      name: '',
      userName: '',
      userLastName: '',
      phone: '',
      email: '',
      direction: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('EL nombre del negocio es obligatorio'),
      userName: Yup.string().required('EL nombre del encargado es obligatorio'),
      userLastName: Yup.string().required(
        'EL apellido del encargado es obligatorio',
      ),
      phone: Yup.string().required('EL telefono del negocio es obligatorio'),
      email: Yup.string()
        .required('EL email es obligatorio')
        .email('Ingrese un email válido'),
      direction: Yup.string().required('La dirección es obligatoria'),
    }),
    onSubmit: data => {
      console.log({data});
    },
  });
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewContainerForm}>
        <Text style={styles.txtTitle}>Registra tu local</Text>
        <CustomInput
          // iconName="home"
          placeholder="Nombre del local"
          value={form.values.name}
          errorMessage={form.errors.name}
          onChangeText={form.handleChange('name')}
        />
        {/* <CustomInput
          // iconName="home"
          placeholder="Tipo de Negocio"
          onChangeText={txt => console.log({txt})}
        /> */}
        <CustomInput
          // iconName="home"
          placeholder="Nombre"
          value={form.values.userName}
          errorMessage={form.errors.userName}
          onChangeText={form.handleChange('userName')}
        />
        <CustomInput
          // iconName="home"
          placeholder="Apellido"
          value={form.values.userLastName}
          errorMessage={form.errors.userLastName}
          onChangeText={form.handleChange('userLastName')}
        />
        <CustomInput
          // iconName="home"
          placeholder="Telefono de contacto"
          value={form.values.phone}
          errorMessage={form.errors.phone}
          onChangeText={form.handleChange('phone')}
        />
        <CustomInput
          // iconName="home"
          placeholder="Correo electrónico"
          value={form.values.email}
          errorMessage={form.errors.email}
          onChangeText={form.handleChange('email')}
        />
        <CustomInput
          // iconName="home"
          placeholder="Direccion del local"
          value={form.values.direction}
          errorMessage={form.errors.direction}
          onChangeText={form.handleChange('direction')}
          iconNameRigth="location-on"
        />
        <Button title="Registrar" onPress={() => console.log('press')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {},
  viewContainerForm: {
    borderRadius: 20,
    top: -20,
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
  },
});

export default RegisterBusinessForm;
