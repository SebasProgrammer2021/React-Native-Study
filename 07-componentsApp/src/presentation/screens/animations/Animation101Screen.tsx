import React, { useContext } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
// import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';
import { colors } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';
import CustomView from '../../components/ui/CustomView';
import Button from '../../components/ui/Button';

const Animation101Screen = () => {
  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation()
  const { colors } = useContext(ThemeContext);

  return (
    <CustomView style={styles.container}>
      <Animated.View style={[
        styles.purpleBox,
        {
          backgroundColor: colors.primary,
        },
        {
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop
          }]
        }
      ]}>
      </Animated.View>
      <Button onPress={() => {
        fadeIn({});
        startMovingTopPosition({
          initialPosiiton: -200,
          easing: Easing.elastic(1),
          duration: 750
        })
      }}
        style={{ marginTop: 10 }}
        text="FadeIn"
      />

      <Button
        onPress={() => fadeOut({})}
        style={{ marginTop: 10 }}
        text="FadeOut"
      />
    </CustomView >
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  purpleBox: {
    width: 150,
    height: 150
  }
})

export default Animation101Screen;
