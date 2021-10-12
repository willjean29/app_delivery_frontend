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
        <TouchableOpacity style={styles.btnCategory}>
          <View style={styles.viewConatinerImage}>
            <Image
              source={{
                uri: 'https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png',
              }}
              style={styles.imgCategory}
            />
          </View>
          <Text style={styles.txtCategory}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  btnCategory: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  viewConatinerImage: {
    backgroundColor: ColorsApp.GRAY_COLOR,
    borderRadius: 100,
    padding: 10,
  },
  imgCategory: {
    width: 50,
    height: 50,
  },
  txtCategory: {
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});
export default SliderCategories;
