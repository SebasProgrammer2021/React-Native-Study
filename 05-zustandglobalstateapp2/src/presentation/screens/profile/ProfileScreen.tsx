import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../../../config';
import { useProfielStore } from '../../store/profile-store';

const ProfileScreen = () => {
    const name = useProfielStore(state => state.name)
    const email = useProfielStore(state => state.email)
    const changeProfile = useProfielStore(state => state.changeProfile)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{email}</Text>

            <Pressable style={styles.primaryButton}
                onPress={() => useProfielStore.setState({ name: "Balu Londoño" })}
            >
                <Text>
                    Cambiar nombre
                </Text>
            </Pressable>
            <Pressable style={styles.primaryButton}
                onPress={() => useProfielStore.setState({ email: "balu@gmail.com" })}
            >
                <Text>
                    Cambiar email
                </Text>
            </Pressable>
            <Pressable style={styles.primaryButton}
                onPress={() => changeProfile("testcambio", "testcambio@gmail.com")}
            >
                <Text>
                    Regresar a Sebas Doe
                </Text>
            </Pressable>
        </View>
    );
}


export default ProfileScreen;
