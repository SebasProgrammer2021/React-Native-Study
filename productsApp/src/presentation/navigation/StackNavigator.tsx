import { StackCardStyleInterpolator, createStackNavigator } from '@react-navigation/stack';
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

const fadeAnimation: StackCardStyleInterpolator = ({ current }) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  }
}

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{
        headerShown: false,
        // cardStyleInterpolator: fadeAnimation
      }}
    >
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name="LoginScreen" component={LoginScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
}