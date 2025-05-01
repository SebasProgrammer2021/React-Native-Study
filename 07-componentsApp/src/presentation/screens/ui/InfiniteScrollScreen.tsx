import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Image, ActivityIndicator } from 'react-native';
import Title from '../../components/ui/Title';
import CustomView from '../../components/ui/CustomView';
import { colors } from '../../../config/theme/theme';
import FadeInImage from '../../components/ui/FadeInImage';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    console.log('loadMore');
    // forma 1
    // const newArray: number[] = [];
    // for (let i = 0; i < 5; i++) {
    //   newArray[i] = numbers.length + i;
    // }
    // setNumbers([...numbers, ...newArray]);

    //forma 2
    const newArray = Array.from({ length: 5 }, (_, index) => numbers.length + index);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  }

  return (
    <View style={styles.container}>
      <Title text='Infinite Scroll' safe />
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        renderItem={({ item }) => <ListItem item={item} />}
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <ActivityIndicator size="large" color={colors.primary} style={styles.indicator} />
          </View>
        )}
      />
    </View>
  );
}

interface ListItemProps {
  item: number;
}

const ListItem = ({ item }: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${item}/500/400`}
      style={styles.image}
    />
  // <Image
  //   source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
  //     style={styles.image}
  //   />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "black"
  },
  item: {
    height: 200,
    backgroundColor: colors.primary,
    color: colors.buttonTextColor,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    lineHeight: 300,
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: 400,
  },
  footer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    marginTop: 10,
  }
})

export default InfiniteScrollScreen;
