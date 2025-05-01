import React, { useRef, useState } from 'react';
import { Animated, ImageStyle, StyleProp, StyleSheet, View, ActivityIndicator } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';

interface FadeInImageProps {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: FadeInImageProps) => {
  const { fadeIn, animatedOpacity } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" style={styles.indicator} />
      <Animated.Image
        source={{ uri }}
        onLoadEnd={() => {
          fadeIn({ duration: 1000 })
          setIsLoading(false)
        }}
        style={[style, { opacity: animatedOpacity }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    position: 'absolute',
    color: "grey",
  }
})

export default FadeInImage;
