import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MyIcon from '../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> { }
const RegisterScreen = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.30 }}>
          <Text category='h1'>Crear cuenta</Text>
          <Text category='p2'>Por favor, crea una cuenta para continuar</Text>
        </Layout>

        <Layout style={{ marginTop: 20 }}>
          <Input placeholder='Nombre completo'
            accessoryLeft={<MyIcon name='user' />}
            style={{ marginBottom: 10 }}
          />
          <Input placeholder='Correo'
            keyboardType='email-address'
            accessoryLeft={<MyIcon name='mail' />}
            autoCapitalize='none'
            style={{ marginBottom: 10 }}
          />
          <Input placeholder='Contraseña'
            accessoryLeft={<MyIcon name='lock' />}
            secureTextEntry={true}
            autoCapitalize='none'
            style={{ marginBottom: 10 }}
          />
        </Layout>

        <Layout style={{ height: 20 }} />

        <Layout>
          <Button
            accessoryRight={<MyIcon name='arrow-right-circle' white />}
            onPress={() => { }}
          // appearance='ghost'
          >
            Registrarse
          </Button>
        </Layout>

        <Layout style={{ height: 50 }} />

        <Layout
          style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "flex-end" }}
        >
          <Text>¿Ya tienes una cuenta?</Text>
          <Text status='primary' category='s1' onPress={() => navigation.pop()}> Ingresar</Text>
        </Layout>

      </ScrollView>
    </Layout>
  );
}

export default RegisterScreen;

