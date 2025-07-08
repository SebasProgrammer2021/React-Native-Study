import React from 'react';
import { Button, Icon, Layout, Spinner, Text } from '@ui-kitten/components';

const LoadingScreen = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Spinner status='primary' size='large' />
      <Text style={{ marginTop: 20, fontSize: 30 }}>Cargando</Text>
    </Layout>
  );
}


export default LoadingScreen;
