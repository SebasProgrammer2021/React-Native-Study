import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './presentation/navigators/BottomTabsNavigator';

export const Main = () => {
    return (
        <NavigationContainer>
            <BottomTabsNavigator />
        </NavigationContainer>
    )
}
