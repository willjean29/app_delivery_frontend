import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Modal from 'components/UI/Modal';
import MapView, {Marker} from 'react-native-maps';
import useLocation from 'hooks/useLocation';
import {ColorsApp, AspectMaps, DimensionsDevice} from 'utils/enums';
import Button from 'components/UI/Button';
import {GlobalStyles} from 'theme/globalStyles';
interface ModalSelectUbicationProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSelectUbication: React.FC<ModalSelectUbicationProps> = ({
  isVisible,
  setIsVisible,
}) => {
  const {initialPosition, hasLocation, selectLocation, onChangeLocation} =
    useLocation();
  return (
    <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
      {hasLocation ? (
        <>
          <MapView
            initialRegion={{
              latitude: initialPosition.latitude,
              longitude: initialPosition.longitude,
              latitudeDelta: AspectMaps.LATITUDE_DELTA,
              longitudeDelta: AspectMaps.LONGITUDE_DELTA,
            }}
            onRegionChange={region => onChangeLocation(region)}
            showsUserLocation
            style={{height: DimensionsDevice.HEIGHT_DEVICE * 0.5}}>
            <Marker
              coordinate={selectLocation}
              pinColor={ColorsApp.PRIMARY_COLOR}
              draggable
            />
          </MapView>
          <View style={{...GlobalStyles.containerRowCenter}}>
            <Button
              title="Guardar Ubicacion"
              btnStyle={GlobalStyles.btnSelect}
              onPress={() => {
                console.log({selectLocation});
              }}
            />
            <Button
              title="Cancelar Ubicacion"
              onPress={() => {
                setIsVisible(false);
              }}
              btnStyle={{...GlobalStyles.btnSelect, ...GlobalStyles.btnCancel}}
              txtStyle={GlobalStyles.txtBtnCancel}
            />
          </View>
        </>
      ) : (
        <View
          style={{
            ...GlobalStyles.containerCenter,
            height: DimensionsDevice.HEIGHT_DEVICE * 0.5,
          }}>
          <ActivityIndicator color={ColorsApp.PRIMARY_COLOR} size={30} />
        </View>
      )}
    </Modal>
  );
};

export default ModalSelectUbication;
