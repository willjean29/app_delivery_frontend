import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Button from 'components/UI/Button';
import {ISubcategorie} from 'store/business/interfaces/business.interface';
import {ColorsApp} from 'utils/enums';
interface SliderSubcategoriesProps {
  categories: ISubcategorie[];
  setIndexCategory: React.Dispatch<React.SetStateAction<number>>;
}

const SliderSubcategories: React.FC<SliderSubcategoriesProps> = ({
  categories,
  setIndexCategory,
}) => {
  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <Button
          title={item.name}
          onPress={() => {
            setIndexCategory(index);
          }}
          btnStyle={{
            backgroundColor: ColorsApp.PRIMARY_OPACITY_COLOR,
            // flex: 1,
            borderColor: ColorsApp.PRIMARY_COLOR,
            borderWidth: 1,
            marginHorizontal: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
          txtStyle={{
            color: ColorsApp.PRIMARY_COLOR,
            fontSize: 12,
          }}
        />
      )}
      // contentContainerStyle={{borderWidth: 1}}
    />
  );
};

export default SliderSubcategories;