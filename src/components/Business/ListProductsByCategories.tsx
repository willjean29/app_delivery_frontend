import FadeImage from 'components/UI/FadeImage';
import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import {
  IProduct,
  IProductsByCategory,
} from 'store/business/interfaces/business.interface';
import {ColorsApp} from 'utils/enums';
import CardProduct from 'components/Business/CardProduct';
interface ListProductByCategoriesProps {
  productsByCategory: IProductsByCategory[];
  indexCategory: number;
}

const ListProductByCategories: React.FC<ListProductByCategoriesProps> = ({
  productsByCategory,
  indexCategory,
}) => {
  const section = useRef<SectionList<IProduct, IProductsByCategory>>();
  useEffect(() => {
    section.current?.scrollToLocation({
      sectionIndex: indexCategory,
      itemIndex: 0,
    });
  }, [indexCategory]);
  return (
    <SectionList
      ref={e => {
        section.current = e!;
      }}
      sections={productsByCategory}
      showsVerticalScrollIndicator={false}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({section}) => (
        <View>
          <Text style={styles.txtTitleSection}>{section.categorie.name}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <CardProduct product={item} />}
      contentContainerStyle={{
        paddingBottom: 20,
      }}
    />
  );
};

const styles = StyleSheet.create({
  txtTitleSection: {
    marginHorizontal: 15,
    paddingVertical: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ListProductByCategories;
