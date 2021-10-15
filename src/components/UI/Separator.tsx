import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ColorsApp} from 'utils/enums';

interface SeparatorProps {
  left: string;
}

const Separator: React.FC<SeparatorProps> = ({left}) => {
  return (
    <View
      style={{
        ...styles.viewConatinerSeparator,
        left,
      }}
    />
  );
};

const styles = StyleSheet.create({
  viewConatinerSeparator: {
    backgroundColor: ColorsApp.WHITE_COLOR,
    height: 35,
    width: 2,
    marginVertical: 15,
    position: 'absolute',
  },
});

export default Separator;
