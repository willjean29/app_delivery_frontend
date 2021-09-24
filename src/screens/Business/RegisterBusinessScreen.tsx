import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {ColorsApp} from 'utils/enums';
import RegisterBusinessForm from 'components/Business/RegisterBusinessForm';

interface RegisterBusinessScreenProps {}

const RegisterBusinessScreen: React.FC<RegisterBusinessScreenProps> = () => {
  return (
    <KeyboardAwareScrollView>
      <View style={{flex: 1}}>
        {/* img background */}
        <ImageBackground
          source={{
            uri: 'https://socios.pedidosya.com/resource/PedidosYaResource/PedidosYaResource/images/bg_landing-min.jpg',
          }}
          style={styles.imgBackgroud}>
          <View style={styles.viewContainerTitle}>
            <Text style={styles.txtTitle}>¡Registra tu Negocio!</Text>
            <Text style={styles.txtSubTitle}>
              Regístrate en simples pasos y empieza a hacer crecer tu negocio
              con nosotros.
            </Text>
          </View>
        </ImageBackground>
        {/* register business form */}
        <RegisterBusinessForm />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  imgBackgroud: {
    width: '100%',
    height: 250,
  },
  viewContainerTitle: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: ColorsApp.WHITE_COLOR,
  },
  txtSubTitle: {
    marginTop: 25,
    fontSize: 16,
    fontWeight: '500',
    width: '75%',
    color: ColorsApp.WHITE_COLOR,
  },
});

export default RegisterBusinessScreen;
