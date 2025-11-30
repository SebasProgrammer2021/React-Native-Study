import { View, Text, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { FadeInImage } from '../ui/FadeInImage';

interface Props {
  images: string[];

}

export default function ProductImagesSlideShow({ images }: Props) {
  return (
    <>
      {(images.length === 0)
        ? <Image
          source={require('../../../assets/no-product-image.png')}
          style={{ width: 300, height: 300 }}
        />
        : (
          <FlatList
            data={images}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <FadeInImage
                uri={item}
                style={{ width: 300, height: 300, marginHorizontal: 10 }}
              />
            )}
          />
        )
      }
    </>
  )
}