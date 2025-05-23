import React from 'react'
import { Pressable, Text } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme'

export interface Props {
    label: string;
    color?: string;
    doubleSize?: boolean;
    blackText?: boolean;
    onPress: () => void;
}

export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    doubleSize = false,
    blackText = false,
    onPress
}: Props) => {
    return (
        <Pressable
            onPress={() => onPress()}
            style={({ pressed }) => ({
                ...styles.button,
                backgroundColor: color,
                width: doubleSize ? 180 : 80,
                opacity: (pressed) ? .8 : 1
            })}>
            <Text style={{
                ...styles.buttoText,
                color: blackText ? "black" : "white"
            }}>
                {label}
            </Text>
        </Pressable>
    )
}
