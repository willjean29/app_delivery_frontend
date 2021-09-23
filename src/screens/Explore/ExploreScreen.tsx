import CustomInput from 'components/UI/CustomInput';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {ColorsApp} from 'utils/enums';
import {DrawerScreenProps} from '@react-navigation/drawer';
interface ExploreScreenProps extends DrawerScreenProps<any, any> {}

const categoriesDemo = [
  {
    name: 'Restaurantes',
    img: 'https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png',
  },
  {
    name: 'Tiendas',
    img: 'https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png',
  },
  {
    name: 'Farmacias',
    img: 'https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png',
  },
  {
    name: 'Supermercados',
    img: 'https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png',
  },
  {
    name: 'Bebidas',
    img: 'https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png',
  },
  {
    name: 'Mascotas',
    img: 'https://cdn.iconscout.com/icon/free/png-256/fast-food-1851561-1569286.png',
  },
];
const restaurantsDemo = [
  {
    name: 'Restaurantes',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/07/c6/d3/ac/starbucks-coffee-miraflores.jpg',
    logo: 'https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg',
    rating: 4.5,
  },
  {
    name: 'Tiendas',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/07/c6/d3/ac/starbucks-coffee-miraflores.jpg',
    logo: 'https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg',
    rating: 4.5,
  },
  {
    name: 'Farmacias',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/07/c6/d3/ac/starbucks-coffee-miraflores.jpg',
    logo: 'https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg',
    rating: 4.5,
  },
  {
    name: 'Supermercados',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/07/c6/d3/ac/starbucks-coffee-miraflores.jpg',
    logo: 'https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg',
    rating: 4.5,
  },
  {
    name: 'Bebidas',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/07/c6/d3/ac/starbucks-coffee-miraflores.jpg',
    logo: 'https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg',
    rating: 4.5,
  },
  {
    name: 'Mascotas',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/07/c6/d3/ac/starbucks-coffee-miraflores.jpg',
    logo: 'https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg',
    rating: 4.5,
  },
];

const ExploreScreen: React.FC<ExploreScreenProps> = ({navigation}) => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, top: top + 10, marginBottom: bottom + 100}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 5,
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu" size={22} />
          </TouchableOpacity>

          <Icon name="notifications-none" size={22} />
        </View>
        <View style={{marginHorizontal: 0}}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              fontWeight: 'bold',
              marginHorizontal: 15,
            }}>
            Bienvenid@ de vuelta Jean
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <View style={{flex: 1, marginRight: 10}}>
              <CustomInput
                iconName="search"
                placeholder="¿Qué quieres pedir?"
                keyboardType={'email-address'}
                value={''}
                onChangeText={txt => {
                  console.log(txt);
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                // borderWidth: 2,
                borderRadius: 10,
                alignItems: 'center',
                padding: 5,
                backgroundColor: ColorsApp.PRIMARY_COLOR,
              }}>
              <Icon name="filter-alt" size={24} color={ColorsApp.WHITE_COLOR} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={categoriesDemo}
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
                      uri: item.img,
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
          <View>
            <Text
              style={{
                fontSize: 18,
                marginHorizontal: 15,
                marginVertical: 5,
                fontWeight: '500',
              }}>
              Los mejores restaurantes
            </Text>
            <FlatList
              data={restaurantsDemo}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View
                  style={{
                    width: 240,
                    marginHorizontal: 10,
                    marginVertical: 15,
                    // borderWidth: 1,
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 6,
                    backgroundColor: '#fff',
                    elevation: 7,
                  }}>
                  <View>
                    <Image
                      source={{uri: item.img}}
                      style={{
                        height: 100,
                        // borderWidth: 1,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                    />
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        padding: 5,
                        borderWidth: 0.5,
                        margin: 10,
                        borderRadius: 10,
                      }}>
                      <Image
                        source={{uri: item.logo}}
                        style={{
                          width: 30,
                          height: 30,
                        }}
                      />
                    </View>

                    <View>
                      <Text style={{marginVertical: 5}}>{item.name}</Text>
                      <View
                        style={{alignItems: 'center', flexDirection: 'row'}}>
                        <Icon name="star" size={16} color="#FFA200" />
                        <Text
                          style={{
                            marginHorizontal: 5,
                            color: '#FFA200',
                            fontWeight: '500',
                          }}>
                          {item.rating}
                        </Text>
                        <Text
                          style={{
                            marginHorizontal: 20,
                            fontSize: 11,
                            color: '#757575',
                          }}>
                          20-35 min
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
            <Text
              style={{
                fontSize: 18,
                marginHorizontal: 15,
                marginVertical: 5,
                fontWeight: '500',
              }}>
              Nuevos ingresos
            </Text>
            <FlatList
              data={restaurantsDemo}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View
                  style={{
                    width: 240,
                    marginHorizontal: 10,
                    marginVertical: 15,
                    // borderWidth: 1,
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 6,
                    backgroundColor: '#fff',
                    elevation: 7,
                  }}>
                  <View>
                    <Image
                      source={{uri: item.img}}
                      style={{
                        height: 100,
                        // borderWidth: 1,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                    />
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        padding: 5,
                        borderWidth: 0.5,
                        margin: 10,
                        borderRadius: 10,
                      }}>
                      <Image
                        source={{uri: item.logo}}
                        style={{
                          width: 30,
                          height: 30,
                        }}
                      />
                    </View>
                    <View>
                      <Text style={{marginVertical: 5}}>{item.name}</Text>
                      <View
                        style={{alignItems: 'center', flexDirection: 'row'}}>
                        <Icon name="star" size={16} color="#FFA200" />
                        <Text
                          style={{
                            marginHorizontal: 5,
                            color: '#FFA200',
                            fontWeight: '500',
                          }}>
                          {item.rating}
                        </Text>
                        <Text
                          style={{
                            marginHorizontal: 20,
                            color: '#757575',
                            fontSize: 12,
                          }}>
                          20-35 min
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
            <Text
              style={{
                fontSize: 18,
                marginHorizontal: 15,
                marginVertical: 5,
                fontWeight: '500',
              }}>
              Los mas populares
            </Text>
            <FlatList
              data={restaurantsDemo}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View
                  style={{
                    width: 240,
                    marginHorizontal: 10,
                    marginVertical: 15,
                    // borderWidth: 1,
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 6,
                    backgroundColor: '#fff',
                    elevation: 7,
                  }}>
                  <View>
                    <Image
                      source={{uri: item.img}}
                      style={{
                        height: 100,
                        // borderWidth: 1,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                    />
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        padding: 5,
                        borderWidth: 0.5,
                        margin: 10,
                        borderRadius: 10,
                      }}>
                      <Image
                        source={{uri: item.logo}}
                        style={{
                          width: 30,
                          height: 30,
                        }}
                      />
                    </View>
                    <View>
                      <Text style={{marginVertical: 5}}>{item.name}</Text>
                      <View
                        style={{alignItems: 'center', flexDirection: 'row'}}>
                        <Icon name="star" size={16} color="#FFA200" />
                        <Text
                          style={{
                            marginHorizontal: 5,
                            color: '#FFA200',
                            fontWeight: '500',
                          }}>
                          {item.rating}
                        </Text>
                        <Text
                          style={{
                            marginHorizontal: 20,
                            color: '#757575',
                            fontSize: 12,
                          }}>
                          20-35 min
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ExploreScreen;
