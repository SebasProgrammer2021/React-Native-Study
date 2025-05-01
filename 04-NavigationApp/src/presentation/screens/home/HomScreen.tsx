import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const HomScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            {/* <Pressable onPress={() => navigation.navigate("Products" as never)} style={globalStyles.primaryButton}>
                <Text style={globalStyles.buttonText}>
                    Productos
                </Text>
            </Pressable> */}

            <PrimaryButton
                onPress={() => navigation.navigate("Products" as never)}
                label="Productos"
            />
            <PrimaryButton
                onPress={() => navigation.navigate("Settings" as never)}
                label="Configuración"
            />
        </View>
    );
};

