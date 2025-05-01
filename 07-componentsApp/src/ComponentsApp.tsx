import React, { PropsWithChildren, useContext } from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import StackNavigator from './presentation/navigator/StackNavigator';
import { ThemeContext, ThemeProvider } from './presentation/context/ThemeContext';

const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
}


export default ComponentsApp;
