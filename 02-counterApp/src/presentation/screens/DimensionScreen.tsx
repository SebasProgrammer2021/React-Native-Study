import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window")

export const DimensionScreen = () => {
    const { width, height } = useWindowDimensions()
    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width: width * .6
                }}
                />
                <Text style={styles.title}>
                    w: {width}
                </Text>
                <Text style={styles.title}>
                    h: {height}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        width: "100%"
    },
    purpleBox: {
        backgroundColor: "#5856d6",
        height: "50%",
        width: "50%"
    },
    title: {
        fontSize: 30,
        paddingHorizontal: 32,
        paddingVertical: 10
    }
})
