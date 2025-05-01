import React, { useRef, useState } from 'react';
import { Image, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { colors, globalStyles } from '../../../config/theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { Slide, items } from './data/dataSlidesScreen';
import Button from '../../components/ui/Button';
import { useNavigation } from '@react-navigation/native';

const SlidesScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList<Slide> | null>(null);
  const navigation = useNavigation<any>();

  /**
   * Handles scroll events on the FlatList of slides.
   * @param {NativeSyntheticEvent<NativeScrollEvent>} event The scroll event.
   * @returns {void} Nothing.
   */
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
  }

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;
    flatListRef.current.scrollToIndex({ index, animated: true });
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.background
    }}>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <SlideItem item={item} />
        )}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        scrollEnabled={false}
        onScroll={onScroll}
      />
      {
        currentSlideIndex === items.length - 1 ?
          <Button
            text='Finalizar'
            style={{
              position: 'absolute',
              bottom: 50,
              right: 30,
              width: 140
            }}
            onPress={() =>
              // scrollToSlide(0)
              navigation.goBack()

            }
          />
          :
          <Button
            text='Siguiente'
            style={{
              position: 'absolute',
              bottom: 50,
              right: 30,
              width: 140
            }}
            onPress={() => scrollToSlide(currentSlideIndex + 1)}
          />
      }
    </View>
  );
}

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
  const { width } = useWindowDimensions();
  const { title, desc, img } = item

  return (
    <View style={{
      flex: 1,
      backgroundColor: "white",
      borderRadius: 5,
      padding: 40,
      justifyContent: 'center',
      width: width
    }}>
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: "center",
          alignSelf: "center"
        }}
      />

      <Text style={[
        globalStyles.title,
        {
          color: colors.primary
        }
      ]}>
        {title}
      </Text>
      <Text
        style={{
          color: colors.text,
          marginTop: 20,
          fontSize: 20
        }}
      >
        {desc}
      </Text>
    </View >
  )
}

const styles = StyleSheet.create({})

export default SlidesScreen;
