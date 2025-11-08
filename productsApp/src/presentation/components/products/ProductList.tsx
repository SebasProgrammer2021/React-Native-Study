import React, { useState } from 'react';
import { RefreshControl, StyleSheet, View } from 'react-native';
import { IProduct } from '../../../domain/entities/product';
import { Layout, List, Text } from '@ui-kitten/components';
import ProductCard from './ProductCard';

interface Props {
  products: IProduct[];
  fetchNextPage?: () => void;
}

const ProductList = ({ products, fetchNextPage }: Props) => {
  console.log("🚀 ~ ProductList ~ products:", products)

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onPullToRefresh = async () => {
    setIsRefreshing(true);
    console.log('Pull to refresh triggered');

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsRefreshing(false);
  }

  return ( 
    <List
      data={products}
      numColumns={2}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item }) => <ProductCard product={item} />}
      ListFooterComponent={() => <Layout style={{ height: 150 }} />}
      onEndReached={() => {
        fetchNextPage && fetchNextPage();
      }}
      onEndReachedThreshold={0.8}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onPullToRefresh} />}
    />
  );
}

const styles = StyleSheet.create({})

export default ProductList;
