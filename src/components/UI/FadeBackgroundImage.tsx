import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  StyleProp,
  ImageStyle,
  Animated,
  NativeSyntheticEvent,
  ImageErrorEventData,
  ActivityIndicator,
  ImageSourcePropType,
} from 'react-native';
import useAnimation from 'hooks/useAnimation';
import {ColorsApp} from 'utils/enums';

interface FadeBackgroundImageProps {
  uri: string | ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  children: React.ReactNode;
}

const FadeBackgroundImage: React.FC<FadeBackgroundImageProps> = ({
  uri,
  style = {},
  children,
}) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };
  const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoading(false);
  };

  return (
    <View
      style={{
        ...styles.viewContainer,
        ...(style as any),
        borderWidth: 2,
      }}>
      {isLoading && (
        <ActivityIndicator
          color={ColorsApp.PRIMARY_COLOR}
          size={30}
          style={{
            top: '50%',
            position: 'absolute',
            bottom: '50%',
            zIndex: 9999,
          }}
        />
      )}
      <ImageBackground
        source={typeof uri !== 'string' ? uri : {uri}}
        onLoad={() => finishLoading()}
        onError={err => onError(err)}
        style={{
          ...(style as any),
          // opacity,
        }}>
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FadeBackgroundImage;
