import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { FlatList } from 'react-native-gesture-handler'
import { PrimaryButton } from '../../components/shared/PrimaryButton'

const productsList = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  { id: 5, name: "Product 5" },
  { id: 6, name: "Product 6" },
]

export const ProductsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.componentTitle}>Productos</Text>
      <FlatList
        data={productsList}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={() => { }}
            label={item.name}
          />
        )}
      />
    </View>
  )
}
