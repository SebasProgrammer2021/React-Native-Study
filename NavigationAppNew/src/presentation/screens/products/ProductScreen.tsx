import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParams } from '../../routes/StackNavigator'

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.productInfo.name
    })
  }, [])


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.componentTitle}>Product Screen</Text>
      <Text style={{
        fontSize: 30,
        textAlign: "center",
        marginTop: 20
      }}>
        {/* {params.productInfo.id}- */}
        {params.productInfo.name}
      </Text>
    </View>
  )
}
