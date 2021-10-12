import Button from 'components/UI/Button';
import CustomInput from 'components/UI/CustomInput';
import FadeImage from 'components/UI/FadeImage';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ColorsApp} from 'utils/enums';

interface CreateProductScreenProps {}

const CreateProductScreen: React.FC<CreateProductScreenProps> = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{top: top + 10, marginHorizontal: 10}}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Nuevo Producto</Text>
      <FadeImage
        uri={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png'
        }
        style={{
          width: 200,
          height: 200,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: ColorsApp.PRIMARY_COLOR,
          alignSelf: 'center',
          marginVertical: 10,
        }}
      />
      <View style={{flexDirection: 'row', borderWidth: 0}}>
        <Button
          title="Cámara"
          onPress={() => {}}
          btnStyle={{flex: 1, marginHorizontal: 10}}
        />
        <Button
          title="Galeria"
          onPress={() => {}}
          btnStyle={{flex: 1, marginHorizontal: 10}}
        />
        {/* <Button title="Cámara" onPress={() => {}} /> */}
      </View>
      <CustomInput placeholder="Nombre" onChangeText={txt => {}} />
      <CustomInput placeholder="Descripción" onChangeText={txt => {}} />
      <CustomInput placeholder="Stock" onChangeText={txt => {}} />
      <CustomInput placeholder="Disponible" onChangeText={txt => {}} />
      <Button title="Crear Producto" onPress={() => {}} />
    </View>
  );
};

export default CreateProductScreen;
