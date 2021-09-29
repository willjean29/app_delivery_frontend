import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Plane, Chase} from 'react-native-animated-spinkit';
import Modal from 'components/UI/Modal';
import Button from 'components/UI/Button';
import {ColorsApp} from 'utils/enums';
import {GlobalStyles} from 'theme/globalStyles';
import {useDispatch} from 'react-redux';
import {userSignout} from 'store/user/user.actions';
interface ModalSignOutProps {
  isVisible: boolean;
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSignOut: React.FC<ModalSignOutProps> = ({
  isVisible,
  setIsVisible,
}) => {
  const dispatch = useDispatch();
  const signOut = () => dispatch(userSignout());
  return (
    <Modal
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      closePress={false}
      type={'message'}>
      <View>
        <Text style={styles.txtMessage}>¿Quieres cerrar la sesión?</Text>
        <View style={{...GlobalStyles.containerRowCenter}}>
          <Button
            title="Cancelar"
            btnStyle={GlobalStyles.btnSelect}
            onPress={() => {
              setIsVisible && setIsVisible(false);
            }}
          />
          <Button
            title="Si, cerrar"
            onPress={() => {
              // setIsVisible && setIsVisible(false);
              signOut();
            }}
            btnStyle={{...GlobalStyles.btnSelect, ...GlobalStyles.btnCancel}}
            txtStyle={GlobalStyles.txtBtnCancel}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  txtMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default ModalSignOut;
