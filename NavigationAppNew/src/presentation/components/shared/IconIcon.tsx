import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    size?: number;
    color?: string;
    name: string;
}
export const IconIcon = ({ color = "black", name, size = 25 }: Props) => {
    return (
        <Icon name={name} size={size} color={color} />
    )
}
