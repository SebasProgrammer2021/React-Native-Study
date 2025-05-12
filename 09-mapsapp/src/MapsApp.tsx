import React from 'react';
import { StackNavigator } from './presentation/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import PermissionsChecker from './presentation/providers/PermissionsChecker';

const MapsApp = () => {
  return (
    <NavigationContainer>
      <PermissionsChecker>
        <StackNavigator />
      </PermissionsChecker>
    </NavigationContainer>
  );
}


export default MapsApp;
