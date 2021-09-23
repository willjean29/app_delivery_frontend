import Button from 'components/UI/Button';
import CustomInput from 'components/UI/CustomInput';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface RegisterBusinessFormProps {}

const RegisterBusinessForm: React.FC<RegisterBusinessFormProps> = () => {
  console.log('register business form');
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewContainerForm}>
        <Text style={styles.txtTitle}>Registra tu local</Text>
        <CustomInput
          iconName="home"
          placeholder="Nombre del local"
          onChangeText={txt => console.log({txt})}
        />
        <CustomInput
          iconName="home"
          placeholder="Tipo de Negocio"
          onChangeText={txt => console.log({txt})}
        />
        <CustomInput
          iconName="home"
          placeholder="Nombre"
          onChangeText={txt => console.log({txt})}
        />
        <CustomInput
          iconName="home"
          placeholder="Apellido"
          onChangeText={txt => console.log({txt})}
        />
        <CustomInput
          iconName="home"
          placeholder="Telefono de contacto"
          onChangeText={txt => console.log({txt})}
        />
        <CustomInput
          iconName="home"
          placeholder="Correo electrónico"
          onChangeText={txt => console.log({txt})}
        />
        <CustomInput
          iconName="home"
          placeholder="Direccion del local"
          onChangeText={txt => console.log({txt})}
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
