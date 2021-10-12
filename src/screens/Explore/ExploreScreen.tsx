import CustomInput from 'components/UI/CustomInput';
import React, {useEffect} from 'react';
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
import {ColorsApp, RoutesNames} from 'utils/enums';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import {businessGetAll} from 'store/business/business.actions';
import {categoriesLoad} from 'store/categories/categories.actions';
import {RootStore} from 'store/store';
import SliderCategories from 'components/Explore/SliderCategories';
import HeaderExplore from 'components/Explore/HeaderExplore';
import {IUser} from 'store/user/interfaces/user.interface';
import SliderHorizontal from 'components/Explore/SliderHorizontal';
interface ExploreScreenProps extends DrawerScreenProps<any, any> {}

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
  const dispatch = useDispatch();
  const getAllBusiness = () => dispatch(businessGetAll());
  const getCategories = () => dispatch(categoriesLoad());
  const {user} = useSelector((store: RootStore) => store.user);
  const {categories} = useSelector((store: RootStore) => store.categories);
  const {businesses} = useSelector((store: RootStore) => store.business);

  useEffect(() => {
    getAllBusiness();
    getCategories();
  }, []);
  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      {/* header explore */}
      <View style={{flex: 1, top: top + 10, marginBottom: bottom + 100}}>
        <HeaderExplore navigation={navigation} user={user as IUser} />
        {/* slider categories */}
        <SliderCategories categories={categories} />

        {/* slider restaurantes */}
        <SliderHorizontal
          title="Los mejores restaurantes"
          businesses={businesses}
        />

        {/* slider ingresos */}
        <SliderHorizontal title="Nuevos ingresos" businesses={businesses} />

        {/* slider populares */}
        <SliderHorizontal title="Los más populares" businesses={businesses} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ExploreScreen;
