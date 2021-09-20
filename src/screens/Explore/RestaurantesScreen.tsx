import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {View, Text, StyleSheet, Button} from 'react-native';

interface RestaurantsScreenProps extends StackScreenProps<any, any> {}

const RestaurantsScreen: React.FC<RestaurantsScreenProps> = ({navigation}) => {
  return (
    <View>
      <Text>RestaurantsScreen</Text>
      <Button
        title="Restaurants"
        onPress={() => {
          navigation.navigate('Profile', {screen: 'ProfileScreen'});
        }}
      />
    </View>
  );
};

export default RestaurantsScreen;
