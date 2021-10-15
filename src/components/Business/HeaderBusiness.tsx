import FadeBackgroundImage from 'components/UI/FadeBackgroundImage';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IBusiness} from 'store/business/interfaces/business.interface';
import {ColorsApp, DimensionsDevice} from 'utils/enums';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from 'components/UI/Button';
interface HeaderBusinessProps {
  business: IBusiness;
}

const HeaderBusiness: React.FC<HeaderBusinessProps> = ({business}) => {
  const {top} = useSafeAreaInsets();
  return (
    <FadeBackgroundImage uri={business.background} style={styles.backgroudImg}>
      <>
        <View style={styles.viewContainerOpacity} />
        <View
          style={{
            paddingTop: top + 20,
            justifyContent: 'center',
            flex: 1,
          }}>
          {/* container icons */}
          <View style={styles.viewContainerIcons}>
            <Icon name="arrow-back" size={28} color={ColorsApp.WHITE_COLOR} />
            <View style={{flexDirection: 'row'}}>
              <Icon name="bookmark" size={28} color={ColorsApp.WHITE_COLOR} />
              <Icon
                name="share"
                size={28}
                color={ColorsApp.WHITE_COLOR}
                style={{marginHorizontal: 10}}
              />
              <Icon name="info" size={28} color={ColorsApp.WHITE_COLOR} />
            </View>
          </View>
          {/* container body */}
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
            <Text style={styles.txtBusiness}>{business.name}</Text>
            <View style={styles.viewContainerLocation}>
              <Icon
                name="location-on"
                size={18}
                color={ColorsApp.WHITE_COLOR}
              />
              <Text style={styles.txtLocation}>{business.address}</Text>
            </View>
            <Text></Text>
          </View>
          {/* conatiner stadistics */}
          <View style={styles.viewContainerAtributes}>
            <ConatinerStats
              iconName="star"
              data={business.rating}
              title="Ratings"
            />

            <ConatinerStats
              iconName="bookmark"
              data={business.rating}
              title="Favorites"
            />

            <ConatinerStats
              iconName="image"
              data={business.rating}
              title="Photos"
            />
          </View>
        </View>
      </>
    </FadeBackgroundImage>
  );
};

interface ConatinerStatsProps {
  iconName: string;
  title: string;
  data: number;
}

const ConatinerStats: React.FC<ConatinerStatsProps> = ({
  iconName,
  title,
  data,
}) => {
  return (
    <View style={styles.viewContainerStats}>
      <View style={styles.viewStatsHeader}>
        <Icon name={iconName} size={20} color={ColorsApp.WHITE_COLOR} />
        <Text style={styles.txtStats}>{data}</Text>
      </View>

      <Text style={styles.txtStatsMessage}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroudImg: {
    height: DimensionsDevice.HEIGHT_DEVICE * 0.4,
    width: '100%',
  },
  viewContainer: {},
  viewContainerIcons: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  viewContainerOpacity: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  txtBusiness: {
    color: ColorsApp.WHITE_COLOR,
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewContainerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  txtLocation: {
    color: ColorsApp.WHITE_COLOR,
    fontWeight: '500',
  },
  viewContainerAtributes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 20,
  },
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

export default HeaderBusiness;
