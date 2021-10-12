import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ICategory} from 'store/categories/interfaces/categories.interface';
import {ColorsApp} from 'utils/enums';

interface SliderCategoriesProps {
  categories: ICategory[];
}

const SliderCategories: React.FC<SliderCategoriesProps> = ({categories}) => {
  return (
    <FlatList
      data={categories}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
            marginTop: 10,
            marginBottom: 10,
          }}>
          <View
            style={{
              backgroundColor: ColorsApp.GRAY_COLOR,
              borderRadius: 100,
              padding: 10,
            }}>
            <Image
              source={{
                uri: 'https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png',
              }}
              style={{
                width: 60,
                height: 60,
              }}
            />
          </View>
          <Text style={{fontWeight: '500'}}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default SliderCategories;
