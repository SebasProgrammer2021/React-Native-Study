import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface Props {
    label?: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const styles = StyleSheet.create({
    pressableButton: {
        backgroundColor: "#5856d6",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 20
    },
    buttonPressed: {
        backgroundColor: "#4746ab"
    },
    buttonText: {
        fontSize: 24,
        color: "white",
        textAlign: "center"
    }
})


export const PrimaryButton = ({ label, onPress, onLongPress }: Props) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.pressableButton,
                pressed && styles.buttonPressed
            ]}
            onPress={() => onPress && onPress()}
            onLongPress={() => onLongPress && onLongPress()}
        >
            <Text style={styles.buttonText}>{label}</Text>
        </Pressable>
    )
}
