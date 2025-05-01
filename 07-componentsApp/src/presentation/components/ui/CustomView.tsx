import React, { ReactNode, useContext } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { globalStyles, colors } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>
  children?: ReactNode;
  margin?: boolean;
}

const CustomView = ({ style, children, margin = false }: Props) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={[
      globalStyles.mainContainer,
      margin ? globalStyles.globalMargin : null,
      { backgroundColor: colors.background },
      style
    ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({})

export default CustomView;
