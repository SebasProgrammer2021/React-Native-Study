import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from './presentation/navigation/StackNavigator';

const ProductsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})

export default ProductsApp;
