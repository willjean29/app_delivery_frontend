import Button from 'components/UI/Button';
import CustomInput from 'components/UI/CustomInput';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface CreateCategorieScreenProps {}

const CreateCategorieScreen: React.FC<CreateCategorieScreenProps> = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{top: top + 10, marginHorizontal: 10}}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Nueva Categoria</Text>
      <CustomInput placeholder="Nombre" onChangeText={txt => {}} />
      <CustomInput placeholder="Descripción" onChangeText={txt => {}} />
      <Button title="Crear Categoria" onPress={() => {}} />
    </View>
  );
};

export default CreateCategorieScreen;
