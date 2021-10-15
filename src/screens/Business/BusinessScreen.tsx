import {StackScreenProps} from '@react-navigation/stack';
import Button from 'components/UI/Button';
import FadeBackgroundImage from 'components/UI/FadeBackgroundImage';
import FadeImage from 'components/UI/FadeImage';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  SectionList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ColorsApp, DimensionsDevice, RoutesNames} from 'utils/enums';
import {useDispatch, useSelector} from 'react-redux';
import {
  businessGetInfo,
  businessGetSubcategories,
  businessGetProducts,
} from 'store/business/business.actions';
import {RootStore} from 'store/store';
import {BusinessStackParamList} from 'navigation/BusinessStack';
import HeaderBusiness from 'components/Business/HeaderBusiness';
import SliderSubcategories from 'components/Business/SliderSubcategories';
import ListProductByCategories from 'components/Business/ListProductsByCategories';

interface BusinessScreenProps
  extends StackScreenProps<
    BusinessStackParamList,
    RoutesNames.BUSINESS_SCREEN
  > {}

const BusinessScreen: React.FC<BusinessScreenProps> = ({navigation, route}) => {
  const [indexCategory, setIndexCategory] = useState(0);
  const {top} = useSafeAreaInsets();
  const {business} = route.params;
  // console.log(JSON.stringify({business}, null, 3));
  const dispatch = useDispatch();
  const getBusinessInfo = (id: string) => dispatch(businessGetInfo(id));
  const getSubcategories = (id: string) =>
    dispatch(businessGetSubcategories(id));
  const {subcategories, products, productsByCategory} = useSelector(
    (store: RootStore) => store.business,
  );
  const getProducts = (id: string) => dispatch(businessGetProducts(id));
  // console.log({subcategories});
  useEffect(() => {
    getBusinessInfo(business._id);
    getSubcategories(business._id);
    getProducts(business._id);
  }, []);
  return (
    <View style={{flex: 1}}>
      <HeaderBusiness business={business} />
      <View>
        <SliderSubcategories
          categories={subcategories}
          setIndexCategory={setIndexCategory}
        />
      </View>
      <ListProductByCategories
        productsByCategory={productsByCategory}
        indexCategory={indexCategory}
      />

      {/* <Button
        title={'Ver mi pedido (5)'}
        onPress={() => {
          // navigation.navigate(RoutesNames.BUSINESS_STACK, {
          //   screen: RoutesNames.BUSINESS_SHOPPING_SCREEN,
          // });
        }}
        rightIcon={'shopping-cart'}
        btnStyle={{
          // borderWidth: 1,
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          width: '90%',
          marginHorizontal: '5%',
          bottom: 10,
        }}
        txtStyle={
          {
            // fontWeight: 'bold',
          }
        }
        rightTxt={'S/. 85.70'}
        txtRightStyle={{
          fontWeight: '500',
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainerStats: {
    borderTopWidth: 2,
    borderColor: ColorsApp.WHITE_COLOR,
    flex: 1,
    padding: 10,
  },
  viewStatsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtStats: {
    color: ColorsApp.WHITE_COLOR,
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  txtStatsMessage: {
    color: ColorsApp.WHITE_COLOR,
  },
});
export default BusinessScreen;
