import FadeImage from 'components/UI/FadeImage';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import {ColorsApp, DimensionsDevice} from 'utils/enums';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'components/UI/Button';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
interface ProductScreenProps {}

const ProductScreen: React.FC<ProductScreenProps> = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <FadeImage
        uri={
          'https://www.comedera.com/wp-content/uploads/2021/02/comidas-rapidas-1.jpg'
        }
        style={{
          width: '100%',
          height: DimensionsDevice.HEIGHT_DEVICE * 0.4,
          borderRadius: 10,
        }}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: '#fff',
          borderRadius: 100,
          padding: 2,
          position: 'absolute',
          top: top + 10,
          left: 10,
        }}>
        <Icon name="arrow-back" size={28} color={'#000'} />
      </TouchableOpacity>
      <View style={{marginVertical: 10}}>
        <View
          style={{
            paddingHorizontal: 10,
          }}>
          <Text style={{fontWeight: '600', fontSize: 18, marginVertical: 5}}>
            Desayuno Criollo
          </Text>
          <Text style={{fontSize: 14, color: 'gray'}}>
            Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo
          </Text>
          <Text style={{fontWeight: '600', fontSize: 16, marginVertical: 5}}>
            S/. 31
          </Text>
        </View>
        {/* conatiner unidad */}
        <View
          style={{
            // borderWidth: 1,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            paddingHorizontal: 10,
            marginVertical: 15,
            shadowColor: ColorsApp.BLACK_COLOR,
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            backgroundColor: '#fff',
            elevation: 7,
          }}>
          <Text style={{fontWeight: '600'}}>Unidades</Text>
          <View
            style={{
              flexDirection: 'row',
              // borderWidth: 1,
              marginVertical: 10,
              // alignItems: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: ColorsApp.PRIMARY_OPACITY_COLOR,
                paddingVertical: 5,
                paddingHorizontal: 7,
                borderTopStartRadius: 10,
                borderBottomStartRadius: 10,
                justifyContent: 'center',
              }}>
              <Icon name={'remove'} color={ColorsApp.PRIMARY_COLOR} size={16} />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: ColorsApp.PRIMARY_OPACITY_COLOR,
                paddingVertical: 5,
                paddingHorizontal: 7,
              }}>
              <Text style={{color: ColorsApp.PRIMARY_COLOR}}>1</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: ColorsApp.PRIMARY_OPACITY_COLOR,
                paddingVertical: 5,
                paddingHorizontal: 7,
                borderTopEndRadius: 10,
                borderBottomEndRadius: 10,
                justifyContent: 'center',
              }}>
              <Icon name={'add'} color={ColorsApp.PRIMARY_COLOR} size={16} />
            </TouchableOpacity>
          </View>
        </View>
        {/* container nota de producto */}
        <View
          style={{
            marginHorizontal: 15,
            marginVertical: 15,
          }}>
          <Text
            style={{
              fontWeight: '600',
              // marginVertical: 20,
              marginBottom: 15,
              // paddingBottom: 30,
              // paddingTop: 30,
            }}>
            ¿Quieres aclarar algo?
          </Text>
          <View
            style={{
              // borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 20,
              borderRadius: 10,
              shadowColor: ColorsApp.BLACK_COLOR,
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.29,
              shadowRadius: 4.65,
              backgroundColor: '#fff',
              elevation: 7,
            }}>
            <TextInput
              placeholder="Notas al producto"
              multiline
              style={{
                // borderWidth: 1,
                padding: 0,
                marginTop: 0,
                paddingBottom: Platform.OS === 'ios' ? 5 : 0,
                borderBottomWidth: 1,
                // borderColor: ColorsApp.PRIMARY_OPACITY_COLOR,
              }}
            />
            <Text style={{textAlign: 'right'}}>0/100</Text>
          </View>
        </View>
      </View>

      <Button
        title="Agregar al carrito"
        onPress={() => {}}
        btnStyle={{marginVertical: 15, marginHorizontal: 15}}
      />
    </KeyboardAwareScrollView>
  );
};

export default ProductScreen;
