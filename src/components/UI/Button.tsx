import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {ColorsApp} from 'utils/enums';

interface ButtonProps {
  title: string;
  uppercase?: boolean;
  onPress: Function;
  btnStyle?: StyleProp<ViewStyle>;
  txtStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  title,
  uppercase = false,
  onPress,
  btnStyle,
  txtStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{...styles.btnContainer, ...(btnStyle as any)}}
      onPress={() => onPress()}>
      <Text
        style={{
          ...styles.btnText,
          textTransform: uppercase ? 'uppercase' : 'none',
          ...(txtStyle as any),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: ColorsApp.PRIMARY_COLOR,
    borderRadius: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  btnText: {
    color: ColorsApp.WHITE_COLOR,
    textAlign: 'center',
    // textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default React.memo(Button);
