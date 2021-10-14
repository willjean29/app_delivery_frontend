import FadeImage from 'components/UI/FadeImage';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import {IProductsByCategory} from 'store/business/interfaces/business.interface';
import {ColorsApp} from 'utils/enums';

interface ListProductByCategoriesProps {
  productsByCategory: IProductsByCategory[];
}

const ListProductByCategories: React.FC<ListProductByCategoriesProps> = ({
  productsByCategory,
}) => {
  return (
    <SectionList
      sections={productsByCategory}
      // data={cardInfo}
      showsVerticalScrollIndicator={false}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({section}) => (
        <View
          style={
            {
              // borderWidth: 1,
              // backgroundColor: 'rgba(255,255,255,0.8)',
            }
          }>
          <Text
            style={{
              marginHorizontal: 15,
              paddingVertical: 10,
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            {section.categorie.name}
          </Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          activeOpacity={0.8}
          // onPress={() => {
          //   navigation.navigate(RoutesNames.BUSINESS_STACK, {
          //     screen: RoutesNames.PRODUCT_SCREEN,
          //   });
          // }}
          style={{
            flexDirection: 'row',
            // borderWidth: 1,
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
            backgroundColor: '#fff',
            elevation: 7,
          }}>
          <View
            style={{
              // width: '60%',
              flex: 1,
              // borderWidth: 1,
              paddingHorizontal: 10,
              justifyContent: 'space-evenly',
              borderRadius: 10,
            }}>
            <Text style={{fontWeight: '600'}}>{item.name}</Text>
            <Text style={{fontSize: 12, color: 'gray'}}>
              {item.description}
            </Text>
            <Text style={{fontWeight: '600'}}>S/. {item.price}</Text>
          </View>
          <View
            style={{
              // width: 250,
              // borderWidth: 1,
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 10,
              alignItems: 'center',
            }}>
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
      )}
      contentContainerStyle={{
        paddingBottom: 20,
        // borderWidth: 1,
      }}
    />
  );
};

export default ListProductByCategories;
