import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import LoadingScreen from '../screens/loading/LoadingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ProductScreen from '../screens/product/ProductScreen';

export type RootStackParamList = {
  LoadingScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  RegisterScreen: undefined;
  ProductScreen: { productId: string };
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
}