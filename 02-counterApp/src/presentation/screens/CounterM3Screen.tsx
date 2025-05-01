import React, { useState } from 'react'
import {
    View, Text
} from 'react-native'
import { globalStyles } from '../theme/global.styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { FAB } from 'react-native-paper'

export const CounterM3Screen = () => {
    const [counter, setCounter] = useState<number>(0)

    return (
        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>
                {counter.toString()}
            </Text>
            <Icon name='barbell-outline' size={25} />
            <FAB
                // label="+1"
                style={globalStyles.floatingButton}
                onPress={() => setCounter(counter + 1)}
                onLongPress={() => setCounter(0)}
                icon={"add-outline"}
            />
        </View >
    )
}
