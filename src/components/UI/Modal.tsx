import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal as Overlay,
} from 'react-native';
import {ColorsApp} from 'utils/enums';

interface ModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({children, isVisible, setIsVisible}) => {
  return (
    <Overlay animationType="slide" visible={isVisible} transparent={true}>
      {/* background */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setIsVisible(false)}
        style={{
          flex: 1,
          backgroundColor: ColorsApp.BACKGROUND_MODAL_COLOR,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* modal content */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => null}
          style={{
            width: '90%',
            height: 'auto',
            padding: 10,
            borderRadius: 10,
            backgroundColor: ColorsApp.WHITE_COLOR,
            borderColor: ColorsApp.PRIMARY_COLOR,
            borderWidth: 1,
          }}>
          {children}
        </TouchableOpacity>
      </TouchableOpacity>
    </Overlay>
  );
};

export default Modal;