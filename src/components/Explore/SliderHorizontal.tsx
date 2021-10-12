import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IBusiness} from 'store/business/interfaces/business.interface';
import {ColorsApp} from 'utils/enums';

interface SliderHorizontalProps {
  businesses: IBusiness[];
  title: string;
}

const SliderHorizontal: React.FC<SliderHorizontalProps> = ({
  businesses,
  title,
}) => {
  return (
    <View>
      <Text style={styles.txtTitleSection}>{title}</Text>
      <FlatList
        data={businesses}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.viewContainerCard}>
            <View>
              <Image
                source={{
                  uri: 'https://media-cdn.tripadvisor.com/media/photo-s/07/c6/d3/ac/starbucks-coffee-miraflores.jpg',
                }}
                style={styles.imgBackgroud}
              />
            </View>
            <View style={styles.viewContainerInfo}>
              <View style={styles.viewContainerLogo}>
                <Image
                  source={{
                    uri: 'https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg',
                  }}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>

              <View>
                <Text style={{marginVertical: 5}}>{item.name}</Text>
                <View style={styles.viewContainerFooter}>
                  <Icon name="star" size={16} color={ColorsApp.YELLOW_COLOR} />
                  <Text style={styles.txtStars}>{item.rating}</Text>
                  <Text style={styles.txtTime}>20-35 min</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  txtTitleSection: {
    fontSize: 18,
    marginHorizontal: 15,
    marginVertical: 5,
    fontWeight: '500',
  },
  viewContainerCard: {
    width: 240,
    marginHorizontal: 10,
    marginVertical: 15,
    // borderWidth: 1,
    borderRadius: 10,
    shadowColor: ColorsApp.BLACK_COLOR,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    backgroundColor: ColorsApp.WHITE_COLOR,
    elevation: 7,
  },
  imgBackgroud: {
    height: 100,
    // borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  viewContainerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewContainerLogo: {
    padding: 5,
    borderWidth: 0.5,
    margin: 10,
    borderRadius: 10,
  },
  viewContainerFooter: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtStars: {
    marginHorizontal: 5,
    color: ColorsApp.YELLOW_COLOR,
    fontWeight: '500',
  },
  txtTime: {
    marginHorizontal: 20,
    fontSize: 11,
    color: '#757575',
  },
});

export default SliderHorizontal;
