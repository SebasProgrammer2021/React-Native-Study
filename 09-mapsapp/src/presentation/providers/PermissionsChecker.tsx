import React, { Children, PropsWithChildren, useEffect } from 'react';
import { AppState, StyleSheet, View } from 'react-native';
import { usePermissionsStore } from '../store/permissions/usePermissionStore';
import { check } from 'react-native-permissions';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigator/StackNavigator';

const PermissionsChecker = ({ children }: PropsWithChildren) => {

  const { locationStatus, checkLocationPermission } = usePermissionsStore();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (locationStatus === 'granted') {
      navigation.navigate("MapScreen");
    } else if (locationStatus === 'undetermined') {
      navigation.navigate("PermissionsScreen");
    }
  }, [locationStatus]);

  //solucion para IOS
  useEffect(() => {
    checkLocationPermission();
  }, []);


  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <>
      {children}
    </>
  );
}

const styles = StyleSheet.create({})

export default PermissionsChecker;
