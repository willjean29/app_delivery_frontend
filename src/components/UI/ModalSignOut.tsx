import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Plane, Chase} from 'react-native-animated-spinkit';
import Modal from 'components/UI/Modal';
import {ColorsApp} from 'utils/enums';
import {GlobalStyles} from 'theme/globalStyles';
interface ModalSignOutProps {
  isVisible: boolean;
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
}

const ModalSignOut: React.FC<ModalSignOutProps> = ({
  isVisible,
  message = 'Iniciando Sesión',
  setIsVisible,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      closePress={false}
      type={'message'}>
      <View style={{...GlobalStyles.containerCenter}}>
        <Chase
          color={ColorsApp.PRIMARY_COLOR}
          size={50}
          style={{marginVertical: 10}}
        />
        <Text>¿Quieres cerrar la sesión?</Text>
        <Text style={styles.txtMessage}>{message}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  txtMessage: {
    color: ColorsApp.PRIMARY_COLOR,
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
});

export default ModalSignOut;
