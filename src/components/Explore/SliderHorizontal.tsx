import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IBusiness} from 'store/business/interfaces/business.interface';

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
      <Text
        style={{
          fontSize: 18,
          marginHorizontal: 15,
          marginVertical: 5,
          fontWeight: '500',
        }}>
        {title}
      </Text>
      <FlatList
        data={businesses}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={{
              width: 240,
              marginHorizontal: 10,
              marginVertical: 15,
              // borderWidth: 1,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.15,
              shadowRadius: 6,
              backgroundColor: '#fff',
              elevation: 7,
            }}>
            <View>
              <Image
                source={{
                  uri: 'https://media-cdn.tripadvisor.com/media/photo-s/07/c6/d3/ac/starbucks-coffee-miraflores.jpg',
                }}
                style={{
                  height: 100,
                  // borderWidth: 1,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  padding: 5,
                  borderWidth: 0.5,
                  margin: 10,
                  borderRadius: 10,
                }}>
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
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                  <Icon name="star" size={16} color="#FFA200" />
                  <Text
                    style={{
                      marginHorizontal: 5,
                      color: '#FFA200',
                      fontWeight: '500',
                    }}>
                    {item.rating}
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 20,
                      fontSize: 11,
                      color: '#757575',
                    }}>
                    20-35 min
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default SliderHorizontal;
