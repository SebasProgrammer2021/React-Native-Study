import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { Text, View, useWindowDimensions } from 'react-native';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { IconIcon } from '../components/shared/IconIcon';

const Drawer = createDrawerNavigator();


export const DrawerNavigator = () => {
    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerType: (dimensions.width >= 758) ? "permanent" : "front",
                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: "white",
                drawerInactiveTintColor: globalColors.primary,
                drawerItemStyle: {
                    borderRadius: 100,
                    paddingHorizontal: 20
                }
            }}>
            {/* <Drawer.Screen name="Stack Navigator" component={StackNavigator} /> */}
            <Drawer.Screen name="Tabs Navigator" component={BottomTabsNavigator}
                options={{
                    drawerIcon: ({ color }) => (
                        <IconIcon name="bonfire-outline" color={color} />
                    )
                }}
            />
            <Drawer.Screen name="Profile" component={ProfileScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <IconIcon name="person-circle-outline" color={color} />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>
            <View
                style={{
                    height: 100,
                    backgroundColor: globalColors.primary,
                    // margin: 30,
                    marginBottom: 10
                    // borderRadius: 50
                }}
            >
                <Text style={{
                    color: "white",
                    fontSize: 25,
                    margin: 10
                }}>
                    Mi primer RN Drawer
                </Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}
