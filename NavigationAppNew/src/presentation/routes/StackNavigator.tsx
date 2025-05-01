import { createStackNavigator } from '@react-navigation/stack';
import { HomScreen } from '../screens/home/HomScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export type RootStackParams = {
    Home: undefined,
    Product: { productInfo: IProductInfo },
    Products: undefined,
    Settings: undefined
}

export type IProductInfo = {
    id: number,
    name: string,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            headerShown: false
        })
    }, []);

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
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

