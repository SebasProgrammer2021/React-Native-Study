import React, { useState } from 'react'
import {
    View, Text, StyleSheet
    // , Button
} from 'react-native'
import { PrimaryButton } from '../components'
import { Button } from 'react-native-paper'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    title: {
        fontSize: 80,
        textAlign: "center",
        color: "black",
        fontWeight: "300"
    }
})

export const CounterScreen = () => {
    const [counter, setCounter] = useState<number>(0)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {counter.toString()}
            </Text>
            {/* <Button
                onPress={() => { setCounter(counter + 1) }}
                title='+1 on Button'
            /> */}
            {/* <PrimaryButton
                label="Incrementar react-native"
                onPress={() => setCounter(counter + 1)}
                onLongPress={() => setCounter(0)}
            /> */}
            <Button
                onPress={() => setCounter(counter + 1)}
                onLongPress={() => setCounter(0)}
                mode='contained'
            >
                Incrementar react-n-paper
            </Button>
        </View >
    )
}
