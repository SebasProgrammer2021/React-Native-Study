import React from 'react';
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  iconName: string
  onPress: () => void
  style?: StyleProp<ViewStyle>
}

const FAB = ({ iconName, onPress, style }: Props) => {
  return (
    <View style={[styles.btn, style]}>
      <Pressable
        onPress={onPress}
      >
        <Icon
          name={iconName}
          size={30}
          color="#fff"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    zIndex: 1,
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: .27,
      width: 4.5
    },
    elevation: 5
  }
})

export default FAB;
