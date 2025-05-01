import React, { useEffect, useState } from 'react';
import { PropsWithChildren, createContext } from "react";
import { ThemeColors, darkColors, lightColors } from "../../config/theme/theme";
import { AppState, Appearance, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

type ThemeColor = 'light' | 'dark'

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {

  //detecta el color o tema del telefono
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');
  const isDark = currentTheme === 'dark';
  const colors = isDark ? darkColors : lightColors;
  console.log(colorScheme);

  //FORMA 1
  // useEffect(() => {
  //   if (colorScheme === 'dark') {
  //     setCurrentTheme('dark');
  //   } else {
  //     setCurrentTheme('light');
  //   }
  // }, [colorScheme]);

  //FORMA 2 (tambien puede utilizarse el appsatte para ver si la app esta en background, y si vuelve active detectar si un usuario se conecta a un chat, o si esta utilizando o no la aplicación)
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      console.log({ nextAppState });
      const colorScheme = Appearance.getColorScheme();
      setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
    });

    return () => {
      subscription.remove();
    };
  }, []);


  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  }

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme: currentTheme,
          isDark: isDark,
          colors: colors,
          setTheme: setTheme
        }}
      >
        {children}
      </ThemeContext.Provider >
    </NavigationContainer>
  )
}
