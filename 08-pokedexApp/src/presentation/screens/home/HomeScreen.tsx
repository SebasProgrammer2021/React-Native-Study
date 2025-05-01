import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { FAB, Text, useTheme } from 'react-native-paper';
import { getPokemons } from '../../../actions/pokemons';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import PokeballBg from '../../components/ui/PokeballBg';
import { globalTheme } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PokemonCard from '../../components/pokemons/PokemonCard';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> { };

const HomeScreen = ({ navigation }: Props) => {
  const { top } = useSafeAreaInsets();
  const queryCliente = useQueryClient();
  const theme = useTheme();

  //*  FORMA 1:  forma normal de hacer peticiones
  // const { isLoading, data: pokemons = [] } = useQuery({
  //   queryKey: ['pokemons'],
  //   queryFn: () => getPokemons(0),
  //   staleTime: 1000 * 60 * 60 // 1h
  // })

  const { isLoading, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['pokemons', 'infite'],
    initialPageParam: 0,
    staleTime: 1000 * 60 * 60,// 1h
    queryFn: async (params) => {
      const pokemons = await getPokemons(params.pageParam);
      pokemons.forEach(pokemon => {
        queryCliente.setQueryData(['pokemon', pokemon.id], pokemon);
      });

      return pokemons;
    },
    getNextPageParam: (lastPage, pages) => pages.length,
  })

  // console.log("🚀 ~ HomeScreen ~ data:", data)

  return (
    <View style={globalTheme.globalMargin}>
      <PokeballBg style={styles.imgPosition} />
      <FlatList
        data={data?.pages.flat() ?? []}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        style={{ paddingTop: top + 20 }}
        ListHeaderComponent={() => (
          <Text variant='displayMedium'>Pokédex</Text>
        )}
        renderItem={({ item: pokemon }) => <PokemonCard pokemon={pokemon} />}
        onEndReachedThreshold={0.6}
        onEndReached={() => fetchNextPage()}
        showsVerticalScrollIndicator={false}
      />
      <FAB
        label="Buscar"
        style={[
          globalTheme.fab, { backgroundColor: theme.colors.primary }
        ]}
        mode='elevated'
        onPress={() => navigation.push('SearchScreen')}
        color={theme.dark ? 'black' : 'white'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100
  }
})

export default HomeScreen;
