import { Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import MyIcon from '../../components/ui/MyIcon';
import { useAuthStore } from '../../store/auth/useAuthStore';
import { getProductsByPage } from '../../../actions/aut/products/get-products-by-page';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import MainLayout from '../../layouts/MainLayout';
import FullScreenLoader from '../../components/ui/FullScreenLoader';
import ProductList from '../../components/products/ProductList';

const HomeScreen = () => {
  const { logout } = useAuthStore();

  // const { isLoading, data: products = [] } = useQuery({
  //   queryKey: ['products', 'infitite'],
  //   staleTime: 1000 * 60 * 60,
  //   queryFn: () => getProductsByPage(0)
  // })

  const { isLoading, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['products', 'infitite'],
    staleTime: 1000 * 60 * 60,
    initialPageParam: 0,
    queryFn: async (params) => {
      console.log("🚀 ~ HomeScreen ~ params:", { params });
      const products = await getProductsByPage(params.pageParam || 0);
      return products;
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length;
    }
  })

  return (
    <MainLayout
      title="TesloShop - Products"
      subTitle='Aplicacion administrativa'
    // rightAction={() => { }}
    // rightActionIcon='plus'
    >
      {
        isLoading ? (
          <FullScreenLoader />

        ) :
          (
            // <ProductList products={products} />
            <ProductList
              products={data?.pages.flat() ?? []}
              fetchNextPage={fetchNextPage}
            />

          )
      }
    </MainLayout>
  );
}

const styles = StyleSheet.create({})

export default HomeScreen;
