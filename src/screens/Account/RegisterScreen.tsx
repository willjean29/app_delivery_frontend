import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import LeftTitle from 'components/Account/LeftTitle';
import {GlobalStyles} from 'theme/globalStyles';
import FadeImage from 'components/UI/FadeImage';
import ImageLogin from 'assets/img/delivery.png';
import LoginForm from 'components/Account/LoginForm';
import RegisterForm from 'components/Account/RegisterForm';
interface RegisterScreenProps {}

const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  return (
    <KeyboardAwareScrollView>
      <View style={{flex: 1}}>
        {/* Component LeftTitle */}
        <LeftTitle title={'Register'} />

        {/* Component FadeImage */}
        <View style={{...GlobalStyles.containerCenter, paddingTop: 20}}>
          <FadeImage
            uri={ImageLogin}
            style={{
              width: 150,
              height: 150,
            }}
          />
        </View>

        {/* Component RegisterForm */}
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;
