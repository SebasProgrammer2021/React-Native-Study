import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { type NavigationProp, useNavigation, DrawerActions } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigator';
import { IconIcon } from '../../components/shared/IconIcon';
import { HamburguerMenu } from '../../components/shared/HamburguerMenu';

export const HomScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    // FORMA 1
    // useEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
    //                 {/* <Text>
    //                     Menú
    //                 </Text> */}
    //                 <IconIcon name='menu' />
    //             </Pressable>
    //         )
    //     })
    // }, [])


    return (
        <View style={globalStyles.container}>
            {/* <Pressable onPress={() => navigation.navigate("Products" as never)} style={globalStyles.primaryButton}>
                <Text style={globalStyles.buttonText}>
                    Productos
                </Text>
            </Pressable> */}

            <HamburguerMenu />

            <PrimaryButton
                onPress={() => navigation.navigate("Products")}
                label="Productos"
            />
            <PrimaryButton
                onPress={() => navigation.navigate("Settings")}
                label="Configuración"
            />
        </View>
    );
};

