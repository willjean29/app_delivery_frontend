import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GlobalStyles} from 'theme/globalStyles';
import {ColorsApp, DimensionsDevice} from 'utils/enums';

interface LeftTitleProps {
  title: string;
}

const LeftTitle: React.FC<LeftTitleProps> = ({title}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{...GlobalStyles.containerCenter, ...styles.viewContainer}}>
      <Text
        style={{
          ...styles.txtTitle,
          paddingVertical: Platform.OS === 'ios' ? top : 40,
        }}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: ColorsApp.PRIMARY_COLOR,
    width: DimensionsDevice.WIDTH_DEVICE * 0.3,
    borderBottomRightRadius: 50,
  },
  txtTitle: {
    color: ColorsApp.WHITE_COLOR,
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

export default LeftTitle;
