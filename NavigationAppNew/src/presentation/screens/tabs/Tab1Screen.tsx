import { DrawerActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, Pressable } from 'react-native'
import { HamburguerMenu } from '../../components/shared/HamburguerMenu'
import { IconIcon } from '../../components/shared/IconIcon'

export const Tab1Screen = () => {
    // const myIcon = <Icon name="rocket" size={30} color="#900" />;

    // const navigation = useNavigation();

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
    //                 <Text>
    //                     Menú
    //                 </Text>
    //             </Pressable>
    //         )
    //     })
    // }, [])

    return (
        <View>
            <HamburguerMenu />
            <Text>Tab1Screen</Text>
            <IconIcon name="rocket-outline" size={100} color="rgb(0, 0, 0)" />
        </View>
    )
}
