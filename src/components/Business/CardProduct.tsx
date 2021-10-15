import FadeImage from 'components/UI/FadeImage';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IProduct} from 'store/business/interfaces/business.interface';
import {ColorsApp} from 'utils/enums';

interface CardProductProps {
  product: IProduct;
}

const CardProduct: React.FC<CardProductProps> = ({product}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      // onPress={() => {
      //   navigation.navigate(RoutesNames.BUSINESS_STACK, {
      //     screen: RoutesNames.PRODUCT_SCREEN,
      //   });
      // }}
      style={styles.btnCardProduct}>
      <View style={styles.viewContainerInfo}>
        <Text style={{fontWeight: '600'}}>{product.name}</Text>
        <Text style={{fontSize: 12, color: 'gray'}}>{product.description}</Text>
        <Text style={{fontWeight: '600'}}>S/. {product.price}</Text>
      </View>
      <View style={styles.viewContainerImage}>
        <FadeImage
          uri={
            'https://s3-viena-pro.s3.amazonaws.com/media/catalog/product/d/e/desayuno-criollo-viena.jpg'
          }
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnCardProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: ColorsApp.BLACK_COLOR,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    backgroundColor: ColorsApp.WHITE_COLOR,
    elevation: 7,
  },
  viewContainerInfo: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-evenly',
    borderRadius: 10,
  },
  viewContainerImage: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

export default CardProduct;
