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
  placeholder: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  autoCorrect?: boolean;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  value?: string;
  errorMessage?: string;
  onChangeText: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  iconName,
  placeholder,
  autoCapitalize = 'none',
  autoCorrect = false,
  keyboardType = 'default',
  secureTextEntry = false,
  value = '',
  errorMessage,
  onChangeText,
}) => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewContainerInput}>
        <Icon
          name={iconName}
          size={20}
          color={ColorsApp.PRIMARY_COLOR}
          style={styles.iconStyle}
        />
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor={ColorsApp.PRIMARY_COLOR}
          style={styles.inputText}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          keyboardType={keyboardType}
          value={value}
          onChangeText={text => onChangeText(text)}
        />
      </View>
      {errorMessage && (
        <Text style={styles.txtErrorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    // borderWidth: 1,
    marginVertical: 10,
  },
  viewContainerInput: {
    position: 'relative',
    justifyContent: 'center',
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
  txtErrorMessage: {
    color: ColorsApp.PRIMARY_COLOR,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
    fontSize: 12,
    // borderWidth: 1,
  },
});

export default CustomInput;
