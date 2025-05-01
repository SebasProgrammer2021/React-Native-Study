import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomView from '../../components/ui/CustomView';
import Title from '../../components/ui/Title';
import Button from '../../components/ui/Button';
import { ThemeContext } from '../../context/ThemeContext';

const ChangeThemeScreen = () => {
  const { setTheme, currentTheme, colors } = useContext(ThemeContext);


  return (
    <CustomView margin>
      <Title text={`Change Theme: ${currentTheme}`} safe />
      <Button
        text='light'
        onPress={() => setTheme('light')}
      />
      <View style={{ height: 20 }} />
      <Button
        text='dark'
        onPress={() => setTheme('dark')}
      />
      <View style={{ height: 20 }} />

      <Text style={{ color: colors.text }}>
        {JSON.stringify(colors, null, 2)}
      </Text>

    </CustomView>
  );
}

const styles = StyleSheet.create({})

export default ChangeThemeScreen;
