import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import ImageLogin from 'assets/img/delivery.png';
import FadeImage from 'components/UI/FadeImage';
import {GlobalStyles} from 'theme/globalStyles';
import LeftTitle from 'components/Account/LeftTitle';
import LoginForm from 'components/Account/LoginForm';
import {StackScreenProps} from '@react-navigation/stack';
import {NotAuthenticatedStackParamList} from 'navigation/NotAuthenticatedNavigation';
import {RoutesNames} from 'utils/enums';

interface LoginScreenProps
  extends StackScreenProps<
    NotAuthenticatedStackParamList,
    RoutesNames.LOGIN_SCREEN
  > {}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <KeyboardAwareScrollView>
      <View style={{flex: 1}}>
        {/* Component LeftTitle */}
        <LeftTitle title={'LOGIN'} />

        {/* Component FadeImage */}
        <View style={{...GlobalStyles.containerCenter, paddingTop: 40}}>
          <FadeImage
            uri={ImageLogin}
            style={{
              width: 200,
              height: 200,
            }}
          />
        </View>

        {/* Component LoginForm */}
        <LoginForm />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
