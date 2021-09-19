import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ColorsApp} from 'utils/enums';

interface ButtonProps {
  title: string;
  onPress: Function;
}

const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  console.log('button');
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.btnContainer}
      onPress={() => onPress()}>
      <Text style={styles.btnText}>{title}</Text>
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
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default React.memo(Button);
