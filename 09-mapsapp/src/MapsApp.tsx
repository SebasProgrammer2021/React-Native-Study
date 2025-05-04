import React from 'react';
import { StackNavigator } from './presentation/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const MapsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}


export default MapsApp;
