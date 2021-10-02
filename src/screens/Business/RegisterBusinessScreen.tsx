import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {ColorsApp, DimensionsDevice} from 'utils/enums';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RegisterBusinessForm from 'components/Business/RegisterBusinessForm';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import FadeBackgroundImage from 'components/UI/FadeBackgroundImage';
interface RegisterBusinessScreenProps {}

const RegisterBusinessScreen: React.FC<RegisterBusinessScreenProps> = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: top > 0 ? top : 20,
            // left: 0,
            right: 10,
            zIndex: 9999,
            // backgroundColor: 'red',
          }}>
          <Icon name="close" size={28} color={'#fff'} />
        </TouchableOpacity>
        {/* img background */}
        <FadeBackgroundImage
          uri={
            'https://socios.pedidosya.com/resource/PedidosYaResource/PedidosYaResource/images/bg_landing-min.jpg'
          }
          style={styles.imgBackgroud}>
          <View style={styles.viewContainerTitle}>
            <Text style={styles.txtTitle}>¡Registra tu Negocio!</Text>
            <Text style={styles.txtSubTitle}>
              Regístrate en simples pasos y empieza a hacer crecer tu negocio
              con nosotros.
            </Text>
          </View>
        </FadeBackgroundImage>
        {/* register business form */}
        <RegisterBusinessForm />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  imgBackgroud: {
    width: '100%',
    height: DimensionsDevice.HEIGHT_DEVICE * 0.3,
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
