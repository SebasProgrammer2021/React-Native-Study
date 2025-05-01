import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import TopTabsNavitagor from './TopTabsNavitagor';
import { StackNavigator } from './StackNavigator';
import { IconIcon } from '../components/shared/IconIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: globalColors.background
            }}
            screenOptions={{
                // headerShown: false
                tabBarLabelStyle: {
                    marginBottom: 5
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: "transparent",
                    shadowColor: "transparent"
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0
                },
                tabBarActiveTintColor: globalColors.primary,
            }}
        >
            <Tab.Screen name="Tab 1"
                options={{
                    title: "Tab name 1",
                    tabBarIcon: (props) =>
                        // (<Text style={{ color: props.color }}>Tab1 icon</Text>)
                        (<IconIcon name="accessibility-outline" size={30} color="rgb(0, 0, 0)" />)
                }}
                component={Tab1Screen} />
            <Tab.Screen name="Tab 2"
                options={{
                    title: "Tab name 2",
                    tabBarIcon: ({ color }) =>
                        // (<Text style={{ color }}>Tab2 icon</Text>)
                        (<IconIcon name="bookmark" size={30} color="rgb(0, 0, 0)" />)
                }}
                component={TopTabsNavitagor} />
            <Tab.Screen name="Tab 3"
                options={{
                    title: "Tab name 3",
                    tabBarIcon: ({ color }) =>
                        // (<Text style={{ color }}>Tab3 icon</Text>)
                        (<IconIcon name="caret-up-outline" size={30} color="rgb(0, 0, 0)" />)
                }}
                component={StackNavigator} />
        </Tab.Navigator>
    );
}