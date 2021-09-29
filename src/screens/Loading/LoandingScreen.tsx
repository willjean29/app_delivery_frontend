import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import LottieView from 'lottie-react-native';
import Delivery from 'assets/json/delivery.json';
import {ColorsApp, DimensionsDevice} from 'utils/enums';
import {GlobalStyles} from 'theme/globalStyles';
interface LoadingScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  return (
    <View style={{...GlobalStyles.containerCenter, flex: 1}}>
      <View style={styles.viewContainerLottie}>
        <LottieView source={Delivery} autoPlay loop />
      </View>
      <View style={styles.viewContainerLoader}>
        <ActivityIndicator color={ColorsApp.PRIMARY_COLOR} size={28} />
      </View>
      <Text style={styles.txtLoading}>Cargando ... </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainerLottie: {
    width: '100%',
    height: DimensionsDevice.HEIGHT_DEVICE * 0.4,
  },
  viewContainerLoader: {
    marginVertical: 10,
  },
  txtLoading: {
    color: ColorsApp.PRIMARY_COLOR,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default LoadingScreen;
