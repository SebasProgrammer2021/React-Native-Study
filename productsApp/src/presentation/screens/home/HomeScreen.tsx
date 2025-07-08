import { Button, Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyIcon from '../../components/ui/MyIcon';
import { useAuthStore } from '../../store/auth/useAuthStore';

const HomeScreen = () => {
  const { logout } = useAuthStore();

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, color: "white" }}>Pantalla de inicio</Text>
      <Button
        accessoryRight={<MyIcon name='log-out' white />}
        onPress={logout}
      >
        Cerrar sesión
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({})

export default HomeScreen;
