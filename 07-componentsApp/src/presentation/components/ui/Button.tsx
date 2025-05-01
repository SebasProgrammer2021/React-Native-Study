import React, { useContext } from 'react';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  onPress: () => void;
  style?: StyleProp<ViewStyle>
  text: string
}

const Button = ({ text, style, onPress }: Props) => {
  const { colors } = useContext(ThemeContext);


  return (
    <Pressable onPress={onPress} style={[
      globalStyles.btnPrimary,
      {
        opacity: 1,
        backgroundColor: colors.primary
      },
      style
    ]}>
      <Text style={[
        globalStyles.btnPrimaryText,
        {
          color: colors.buttonTextColor
        }
      ]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({})

export default Button;
