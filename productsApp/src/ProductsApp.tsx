import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, useColorScheme } from 'react-native';
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { FeatherIconsPack } from '../feather-icons';

const ProductsApp = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;
  const backgroundColor = (colorScheme === 'dark')
    ? theme['color-basic-800']
    : theme['color-basic-100'];

  return (
    <>
      <IconRegistry icons={FeatherIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer theme={{
          dark: colorScheme === 'dark',
          fonts: theme['fonts'],
          colors: {
            primary: theme['color-primary-500'],
            background: backgroundColor,
            card: theme['color-basic-100'],
            text: theme['text-basic-color'],
            border: theme['color-basic-800'],
            notification: theme['color-primary-500']
          }
        }}>
          <StackNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({})

export default ProductsApp;
