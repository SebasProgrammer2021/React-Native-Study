import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from '../screens/loading/LoadingScreen';
import PermissionsScreen from '../screens/permissions/PermissionsScreen';
import MapScreen from '../screens/maps/MapScreen';

export type RootStackParamList = {
  LoadingScreen: undefined;
  PermissionsScreen: undefined;
  MapScreen: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='LoadingScreen'
      // initialRouteName='PermissionsScreen'
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
    </Stack.Navigator>
  );
}