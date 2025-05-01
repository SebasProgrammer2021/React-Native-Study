import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>
                Box objet model
            </Text> */}

            <View style={styles.purpleBox}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        flex: 1
        // height: 30
    },
    purpleBox: {
        // flex: 1,
        height: 30,
        backgroundColor: "purple",
        margin: 20
    },
    title: {
        fontSize: 30,
        borderWidth: 10,
        paddingHorizontal: 32,
        paddingVertical: 10
    }
})