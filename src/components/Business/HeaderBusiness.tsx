import FadeBackgroundImage from 'components/UI/FadeBackgroundImage';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IBusiness} from 'store/business/interfaces/business.interface';
import {DimensionsDevice} from 'utils/enums';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'components/UI/Button';
interface HeaderBusinessProps {
  business: IBusiness;
}

const HeaderBusiness: React.FC<HeaderBusinessProps> = ({business}) => {
  const {top} = useSafeAreaInsets();
  return (
    <FadeBackgroundImage
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
            // alignItems: 'center',
            paddingTop: top + 20,
            justifyContent: 'center',
            flex: 1,
            // borderWidth: 2,
          }}>
          {/* container icons */}
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
          {/* container body */}
          <View
            style={{
              marginHorizontal: 20,
              flex: 1,
              // borderWidth: 1,
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
          {/* conatiner stadistics */}
          <View
            style={{
              flexDirection: 'row',
              // borderWidth: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginHorizontal: 20,
              // flex: 1,
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
                // borderRightWidth: 1,
                // borderLeftWidth: 1,
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
    </FadeBackgroundImage>
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

export default HeaderBusiness;
