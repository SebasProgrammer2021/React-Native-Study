import { createStackNavigator } from '@react-navigation/stack';
import { HomScreen } from '../screens/home/HomScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                elevation: 0,
                shadowColor: "transparent"
            }
        }}>
            <Stack.Screen options={{
                title: 'Home',
            }} name="Home" component={HomScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

