import React, { useContext } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
// import { colors } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>
}

const Separator = ({ style }: Props) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={{
      backgroundColor: colors.cardBackground
    }}>
      <View style={[styles.separator]} />
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    opacity: 0.4,
    marginVertical: 10,
    width: "80%",
    alignSelf: "center"
  }
})

export default Separator;
