import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray"
    },
    box1: {
        flex: 1,

        backgroundColor: "#5856d6"
    },
    box2: {
        flex: 1,

        backgroundColor: "#333276"
    },
    box3: {
        flex: 1,

        backgroundColor: "#0e0d21"
    },
})