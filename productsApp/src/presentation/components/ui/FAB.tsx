import { Button } from '@ui-kitten/components';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import MyIcon from './MyIcon';

interface Props {
  iconName?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const FAB = ({ iconName, onPress, style }: Props) => {
  return (
    <Button
      appearance="filled"
      status="primary"
      style={[styles.fab, style]}
      accessoryLeft={<MyIcon name={iconName || "plus"} white={true} />}
      onPress={onPress}
    >
    </Button>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 3,
    borderRadius: 13
  }
})

export default FAB;
