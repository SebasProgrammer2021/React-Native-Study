import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { IProduct } from '../../../domain/entities/product';
import { Card, Text } from '@ui-kitten/components';
import { FadeInImage } from '../ui/FadeInImage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/StackNavigator';

interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  console.log(product.images.length);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Card
      style={styles.card}
      onPress={() => navigation.navigate('ProductScreen', { productId: product.id })}
    >
      {
        product.images.length === 0
          ? <Image
            source={require('../../../assets/no-product-image.png')}
            style={styles.cardImage}
          />
          : <FadeInImage
            uri={product.images[0]}
            style={{ flex: 1, height: 200, width: '100%' }}
          />
      }
      <Text category='s1' numberOfLines={2} style={{ textAlign: 'center' }}>{product.title}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F9F9F9",
    flex: 1,
    margin: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
  }
})

export default ProductCard;
