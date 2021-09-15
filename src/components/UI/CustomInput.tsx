import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardTypeOptions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ColorsApp} from 'utils/enums';
interface CustomInputProps {
  iconName: string;
  placeHolder: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  autoCorrect?: boolean;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  iconName,
  placeHolder,
  autoCapitalize = 'none',
  autoCorrect = false,
  keyboardType = 'default',
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.viewContainer}>
      <Icon
        name={iconName}
        size={20}
        color={ColorsApp.PRIMARY_COLOR}
        style={styles.iconStyle}
      />
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeHolder}
        placeholderTextColor={ColorsApp.PRIMARY_COLOR}
        style={styles.inputText}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    position: 'relative',
    justifyContent: 'center',
    marginVertical: 10,
  },
  iconStyle: {
    position: 'absolute',
    padding: 0,
    margin: 0,
    paddingHorizontal: 10,
  },
  inputText: {
    margin: 0,
    height: 35,
    backgroundColor: ColorsApp.PRIMARY_OPACITY_COLOR,
    borderRadius: 20,
    padding: 0,
    paddingLeft: 40,
    // paddingVertical: 10,
    color: ColorsApp.PRIMARY_COLOR,
  },
});

export default CustomInput;
