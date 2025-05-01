/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { CalculatroScreen } from './presentation/screens/CalculatroScreen';
import { styles } from './config/theme/app-theme';

function App() {

  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={"black"}
      />
      <CalculatroScreen />
    </View>
  );
}

export default App;
