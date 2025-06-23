import React from 'react';
import { Button, Icon, Layout, Text } from '@ui-kitten/components';

const LoadingScreen = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'white' }}>
      <Text>loadingScreen</Text>
      <Button
        accessoryLeft={<Icon name="facebook"  />}
      >
        Cargando
      </Button>
    </Layout>
  );
}


export default LoadingScreen;
