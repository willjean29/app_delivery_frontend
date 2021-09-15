import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ColorsApp} from 'utils/enums';

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.btnContainer}>
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

export default Button;
