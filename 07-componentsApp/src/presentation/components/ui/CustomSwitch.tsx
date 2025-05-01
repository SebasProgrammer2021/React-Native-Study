import React, { useContext } from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
// import { colors } from '../../../config/theme/theme';

interface Props {
  isOn: boolean;
  text?: string;
  onChange: (value: boolean) => void;
}

const CustomSwitch = ({ isOn, text, onChange }: Props) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={[styles.switchRow,
    { backgroundColor: colors.cardBackground }

    ]}>
      {text &&
        <Text style={{
          color: colors.text
        }}
        >
          {text}
        </Text>
      }
      <Switch
        thumbColor={Platform.OS === "android" ? colors.primary : ""}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={isOn}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5
  }
})

export default CustomSwitch;
