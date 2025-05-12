import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalTheme } from '../../../config/theme/global-theme';
import { usePermissionsStore } from '../../store/permissions/usePermissionStore';

const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionsStore();

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    }}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center'
        }}
      >Habilitar ubicación</Text>

      <Pressable
        onPress={requestLocationPermission}
        style={globalTheme.btnPrimary}
      >
        <Text style={{
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold',
        }}>
          Habilitar
        </Text>
      </Pressable>

      <Text
        style={{
          fontSize: 30,
          textAlign: 'center'
        }}
      >
        Estado actual: {locationStatus}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({})

export default PermissionsScreen;
