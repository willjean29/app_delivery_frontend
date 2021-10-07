import FadeImage from 'components/UI/FadeImage';
import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ColorsApp} from 'utils/enums';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'components/UI/Button';

const data = [
  {
    name: 'Desayuno Criollo',
    uri: 'https://s3-viena-pro.s3.amazonaws.com/media/catalog/product/d/e/desayuno-criollo-viena.jpg',
    description:
      'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
    price: 31,
  },
  {
    name: 'Desayuno Criollo',
    uri: 'https://s3-viena-pro.s3.amazonaws.com/media/catalog/product/d/e/desayuno-criollo-viena.jpg',
    description:
      'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
    price: 31,
  },
  {
    name: 'Desayuno Criollo',
    uri: 'https://s3-viena-pro.s3.amazonaws.com/media/catalog/product/d/e/desayuno-criollo-viena.jpg',
    description:
      'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
    price: 31,
  },
  {
    name: 'Desayuno Criollo',
    uri: 'https://s3-viena-pro.s3.amazonaws.com/media/catalog/product/d/e/desayuno-criollo-viena.jpg',
    description:
      'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
    price: 31,
  },
  {
    name: 'Desayuno Criollo',
    uri: 'https://s3-viena-pro.s3.amazonaws.com/media/catalog/product/d/e/desayuno-criollo-viena.jpg',
    description:
      'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
    price: 31,
  },
  {
    name: 'Desayuno Criollo',
    uri: 'https://s3-viena-pro.s3.amazonaws.com/media/catalog/product/d/e/desayuno-criollo-viena.jpg',
    description:
      'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
    price: 31,
  },
];
interface BusinessShoppingScreenProps {}

const BusinessShoppingScreen: React.FC<BusinessShoppingScreenProps> = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingTop: top + 10,
          // borderWidth: 1,
          // backgroundColor: 'red',
          // zIndex: 9999,
        }}>
        <View
          style={{
            borderWidth: 0,
            flexDirection: 'row',
            marginBottom: 10,
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity style={{borderWidth: 0}}>
            <Icon name="arrow-back" size={24} />
          </TouchableOpacity>
          <View style={{flex: 1}}>{/* <Text>holaa</Text> */}</View>
        </View>

        <Text style={{fontWeight: 'bold', fontSize: 18, paddingHorizontal: 10}}>
          Mi Pedido
        </Text>
        <View
          style={{
            // borderWidth: 1,
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 10,
            alignItems: 'center',
          }}>
          <FadeImage
            uri={
              'https://s3-viena-pro.s3.amazonaws.com/media/catalog/product/d/e/desayuno-criollo-viena.jpg'
            }
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              // borderWidth: 1,
              flex: 1,
              marginHorizontal: 10,
            }}>
            <Text style={{fontWeight: '600', marginVertical: 2}}>
              Restaurante Marino "Los sabores del sur"
            </Text>
            <Text style={{color: 'gray'}}>27 - 39 min</Text>
          </View>
        </View>
      </View>
      <View style={{borderWidth: 0, flex: 1}}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View
              style={{
                // borderWidth: 1,
                flexDirection: 'row',
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginVertical: 10,
                alignItems: 'center',
                // justifyContent: 'space-between',
              }}>
              <FadeImage
                uri={item.uri}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  paddingTop: 10,
                  // borderWidth: 1,
                  flex: 1,
                  marginHorizontal: 10,
                  // justifyContent: 'flex-end',
                }}>
                <View>
                  <Text>{item.name}</Text>
                  <Text style={{color: 'gray', fontSize: 12}}>
                    {item.description}
                  </Text>
                </View>
                <View
                  style={{
                    // borderWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text>S/ {item.price}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      // borderWidth: 1,
                      marginVertical: 10,
                      alignItems: 'center',
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
                      <Icon
                        name={'remove'}
                        color={ColorsApp.PRIMARY_COLOR}
                        size={16}
                      />
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
                      <Icon
                        name={'add'}
                        color={ColorsApp.PRIMARY_COLOR}
                        size={16}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{borderWidth: 0, marginTop: 10}}>
        <View style={styles.viewPrice}>
          <Text>Total</Text>
          <Text>S/. 170.50</Text>
        </View>
        <View style={styles.viewPrice}>
          <Text>Descuento</Text>
          <Text>S/. 170.50</Text>
        </View>
        <View style={styles.viewPrice}>
          <Text>Delivery</Text>
          <Text>S/. 170.50</Text>
        </View>
      </View>
      <View
        style={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: 'gray',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginVertical: 10,
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Total</Text>
        <Text style={{fontSize: 20, fontWeight: '600'}}>S/. 170.50</Text>
      </View>
      <Button
        title={'Continuar'}
        onPress={() => {}}
        btnStyle={{marginHorizontal: 10, marginBottom: 20}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginVertical: 2,
  },
});

export default BusinessShoppingScreen;
