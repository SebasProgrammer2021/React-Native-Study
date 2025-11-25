import React, { useState } from 'react';
import { RefreshControl, StyleSheet, View } from 'react-native';
import { IProduct } from '../../../domain/entities/product';
import { Layout, List, Text } from '@ui-kitten/components';
import ProductCard from './ProductCard';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
  products: IProduct[];
  fetchNextPage?: () => void;
}

const ProductList = ({ products, fetchNextPage }: Props) => {
  const queryClient = useQueryClient();
  const [isRefreshing, setIsRefreshing] = useState(false);


  const onPullToRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 200));
    queryClient.invalidateQueries({ queryKey: ['products', 'infitite'] });
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
