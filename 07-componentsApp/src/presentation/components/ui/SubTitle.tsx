import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor?: string;
}

const SubTitle = ({ text, safe = false, backgroundColor = colors.background }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <Text style={{
      ...globalStyles.subTitle,
      marginTop: safe ? top : 0,
      marginBottom: 10,
      backgroundColor: backgroundColor,
      paddingVertical: 5,
      paddingHorizontal: 10
    }}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({})

export default SubTitle;
