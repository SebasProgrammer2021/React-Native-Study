import React, { useRef } from 'react'
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({ duration = 300, toValue = 1, callback = () => { } }) => {
    // Animated.timing(animatedTop, {
    //   toValue: 0,
    //   duration: 700,
    //   useNativeDriver: true,
    //   // easing: Easing.elastic(1)
    //   easing: Easing.bounce
    // }).start(() => console.log("Animated ended")
    // )

    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true
    }).start(callback)
  }

  const fadeOut = ({ duration = 200, toValue = 0, callback = () => { } }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true
    }).start(callback)
  }

  const startMovingTopPosition = ({
    initialPosiiton = 0,
    duration = 300,
    toValue = 0,
    easing = Easing.linear,
    callback = () => { }
  }) => {
    animatedTop.setValue(initialPosiiton);
    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing
    }).start(callback)
  }

  return {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition
  }
}
