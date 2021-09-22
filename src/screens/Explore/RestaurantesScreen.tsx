import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {View, Text, StyleSheet, Button} from 'react-native';
import {RoutesNames} from 'utils/enums';

interface RestaurantsScreenProps extends StackScreenProps<any, any> {}

const RestaurantsScreen: React.FC<RestaurantsScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>RestaurantsScreen</Text>
      <Button
        title="Restaurants"
        onPress={() => {
          navigation.navigate(RoutesNames.PROFILE_STACK, {
            screen: RoutesNames.PROFILE_SCREEN,
          });
        }}
      />
    </View>
  );
};

export default RestaurantsScreen;
