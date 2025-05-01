import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native';
import { IconIcon } from './IconIcon';
import { globalColors } from '../../theme/theme';

export const HamburguerMenu = () => {
    const navigation = useNavigation();

    //forma mia
    // return (
    //     <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
    //         <Text>
    //             Menú
    //         </Text>
    //     </Pressable>
    // )


    //forma ferando herrera - MEJOR
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable
                    style={{ marginLeft: 5 }}
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    {/* <Text>
                            Menú
                    </Text> */}
                    <IconIcon name='menu' color={globalColors.primary} />
                </Pressable>
            )
        })
    }, [])

    return (<></>);
}