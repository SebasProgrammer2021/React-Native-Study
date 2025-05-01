import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import Animation101Screen from '../screens/animations/Animation101Screen';
import Animation102Screen from '../screens/animations/Animation102Screen';
import SwitchScreen from '../screens/switches/SwitchScreen';
import AlertScreen from '../screens/alerts/AlertScreen';
import TextInputScreen from '../screens/inputs/TextInputScreen';
import PullToRefreshScreen from '../screens/ui/PullToRefreshScreen';
import SectionListScreen from '../screens/ui/SectionListScreen';
import ModalScreen from '../screens/ui/ModalScreen';
import InfiniteScrollScreen from '../screens/ui/InfiniteScrollScreen';
import SlidesScreen from '../screens/ui/SlidesScreen';
import ChangeThemeScreen from '../screens/ui/ChangeThemeScreen';
import { ThemeContext } from '../context/ThemeContext';

const StackNavigator = () => {
  const Stack = createStackNavigator();
  const { colors } = useContext(ThemeContext);

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: colors.background
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
      <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />

    </Stack.Navigator>
  );
}

export default StackNavigator;
