import {StackScreenProps} from '@react-navigation/stack';
import Button from 'components/UI/Button';
import FadeBackgroundImage from 'components/UI/FadeBackgroundImage';
import FadeImage from 'components/UI/FadeImage';
import React, {useEffect} from 'react';
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

const cardInfo = [
  {
    categorie: 'Combos',
    data: [
      {
        name: 'Desayuno Criollo',
        description:
          'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
        price: 31,
      },
      {
        name: 'Desayuno Criollo',
        description:
          'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
        price: 31,
      },
      {
        name: 'Desayuno Criollo',
        description:
          'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
        price: 31,
      },
    ],
  },
  {
    categorie: 'Combos',
    data: [
      {
        name: 'Desayuno Criollo',
        description:
          'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
        price: 31,
      },
      {
        name: 'Desayuno Criollo',
        description:
          'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
        price: 31,
      },
      {
        name: 'Desayuno Criollo',
        description:
          'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
        price: 31,
      },
    ],
  },
  {
    categorie: 'Combos',
    data: [
      {
        name: 'Desayuno Criollo',
        description:
          'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
        price: 31,
      },
      {
        name: 'Desayuno Criollo',
        description:
          'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
        price: 31,
      },
      {
        name: 'Desayuno Criollo',
        description:
          'Juego natural de 500ml, sandwich de chicharrón, tamal de cerdo',
        price: 31,
      },
    ],
  },
];
interface BusinessScreenProps
  extends StackScreenProps<
    BusinessStackParamList,
    RoutesNames.BUSINESS_SCREEN
  > {}

const BusinessScreen: React.FC<BusinessScreenProps> = ({navigation, route}) => {
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
        <SliderSubcategories categories={subcategories} />
      </View>
      <ListProductByCategories productsByCategory={productsByCategory} />
      {/* <FadeBackgroundImage
        uri={business.background}
        style={{
          height: DimensionsDevice.HEIGHT_DEVICE * 0.4,
          width: '100%',
        }}>
        <>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.3)',
              position: 'absolute',
              bottom: 0,
              top: 0,
              left: 0,
              right: 0,
            }}
          />
          <View
            style={{
       
              paddingTop: top + 20,
              justifyContent: 'center',
              flex: 1,
        
            }}>
 
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 20,
                justifyContent: 'space-between',
              }}>
              <Icon name="arrow-back" size={28} color={'#fff'} />
              <View style={{flexDirection: 'row'}}>
                <Icon name="bookmark" size={28} color={'#fff'} />
                <Icon
                  name="share"
                  size={28}
                  color={'#fff'}
                  style={{marginHorizontal: 10}}
                />
                <Icon name="info" size={28} color={'#fff'} />
              </View>
            </View>
   
            <View
              style={{
                marginHorizontal: 20,
                flex: 1,
       
                justifyContent: 'flex-end',
              }}>
              <Button
                title="Free Delivery"
                onPress={() => {}}
                btnStyle={{width: '30%', paddingVertical: 5}}
                txtStyle={{
                  fontSize: 12,
                }}
              />
              <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>
                {business.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 10,
                }}>
                <Icon name="location-on" size={18} color={'#fff'} />
                <Text style={{color: '#fff', fontWeight: '500'}}>
                  {business.address}
                </Text>
              </View>
              <Text></Text>
            </View>
 
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginHorizontal: 20,
              }}>
              <View style={styles.viewContainerStats}>
                <View style={styles.viewStatsHeader}>
                  <Icon name={'star'} size={20} color={'#FFF'} />
                  <Text style={styles.txtStats}>{business.rating}</Text>
                </View>

                <Text style={styles.txtStatsMessage}>Ratings</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#FFF',
                  height: 35,
                  width: 2,
                  marginVertical: 15,
                  position: 'absolute',
                  left: '30%',
                }}
              />
              <View
                style={{
                  ...styles.viewContainerStats,
                }}>
                <View style={styles.viewStatsHeader}>
                  <Icon name={'bookmark'} size={20} color={'#FFF'} />
                  <Text style={styles.txtStats}>{business.rating}</Text>
                </View>

                <Text style={styles.txtStatsMessage}>Bookmark</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#FFF',
                  height: 35,
                  width: 2,
                  marginVertical: 15,
                  position: 'absolute',
                  left: '65%',
                }}
              />

              <View style={styles.viewContainerStats}>
                <View style={styles.viewStatsHeader}>
                  <Icon name={'image'} size={20} color={'#FFF'} />
                  <Text style={styles.txtStats}>{business.rating}</Text>
                </View>

                <Text style={styles.txtStatsMessage}>Photos</Text>
              </View>
            </View>
          </View>
        </>
      </FadeBackgroundImage> */}
      {/* <View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            // <TouchableOpacity style={{borderWidth: 1}}>
            //   <Text>holaa</Text>
            // </TouchableOpacity>
            <Button
              title={item}
              onPress={() => {}}
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
      </View> */}
      {/* <ScrollView keyboardShouldPersistTaps={'handled'}> */}
      {/* <SectionList
        sections={cardInfo}
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
              {section.categorie}
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
          // backgroundColor: ColorsApp.PRIMARY_OPACITY_COLOR,
        }}
      /> */}
      {/* </ScrollView> */}
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
    borderColor: '#fff',
    flex: 1,
    padding: 10,
  },
  viewStatsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtStats: {
    color: '#fff',
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  txtStatsMessage: {
    color: '#fff',
  },
});
export default BusinessScreen;
