import { API_URL, STAGE } from '@env';
import { Button, Icon, Input, Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Alert, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MyIcon from '../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { useAuthStore } from '../../store/auth/useAuthStore';

interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> { }

const LoginScreen = ({ navigation }: Props) => {
  const { login } = useAuthStore();
  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const { height } = useWindowDimensions();
  const onLogin = async () => {
    if (form.email.length === 0 || form.password.length === 0) {
      return;
    }
    setIsPosting(true);

    const wasSuccessfull = await login(form.email, form.password);
    setIsPosting(false);
    console.log("🚀 ~ onLogin ~ wasSuccessfull:", wasSuccessfull)
    if (wasSuccessfull) return;

    Alert.alert('Error', 'Usuario o contraseña incorrectos', [{ text: 'OK' }]);
  };


  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.35 }}>
          <Text category='h1'>Ingresar</Text>
          <Text category='p2'>Por favor, ingrese para continuar</Text>
        </Layout>

        <Layout style={{ marginTop: 20 }}>
          <Input placeholder='Correo'
            keyboardType='email-address'
            accessoryLeft={<MyIcon name='mail' />}
            autoCapitalize='none'
            value={form.email}
            onChangeText={email => setForm({ ...form, email })}
            style={{ marginBottom: 10 }}
          />
          <Input placeholder='Contraseña'
            accessoryLeft={<MyIcon name='lock' />}
            secureTextEntry={true}
            autoCapitalize='none'
            value={form.password}
            onChangeText={password => setForm({ ...form, password })}
            style={{ marginBottom: 10 }}
          />
        </Layout>

        <Layout style={{ height: 20 }} />

        <Layout>
          <Button
            accessoryRight={<MyIcon name='arrow-right-circle' white />}
            onPress={onLogin}
            disabled={isPosting}
          // appearance='ghost'
          >
            Ingresar
          </Button>
        </Layout>

        <Layout style={{ height: 50 }} />

        <Layout
          style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "flex-end" }}
        >
          <Text>¿No tienes una cuenta?</Text>
          <Text status='primary' category='s1' onPress={() => navigation.navigate('RegisterScreen')}> Crear una</Text>
        </Layout>

      </ScrollView>
    </Layout>
  );
}

export default LoginScreen;
