import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { globalTheme } from '../../../config/theme/global-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActivityIndicator, Text, TextInput } from 'react-native-paper';
import { Pokemon } from '../../../domain/entities/pokemon';
import PokemonCard from '../../components/pokemons/PokemonCard';
import { useQuery } from '@tanstack/react-query';
import { getPokemonsByIds, getPokemonsWithNameIds } from '../../../actions/pokemons';
import FullScreenLoader from '../../components/ui/FullScreenLoader';
import { useDebouncedValue } from '../../hooks/useDebouncedValue';

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const [term, setTerm] = useState("");
  const debouncedValue = useDebouncedValue(term);

  const { data: dataPokemonNamesIdsList = [], isLoading } = useQuery({
    queryKey: ['pokemons', "all"],
    queryFn: () => getPokemonsWithNameIds()
  })

  const pokemonNamesIdsListFiltered = useMemo(() => {

    //valida si es un numero
    if (!isNaN(Number(debouncedValue))) {
      const pokemon = dataPokemonNamesIdsList.find(pokemon => pokemon.id == Number(debouncedValue));
      return pokemon ? [pokemon] : [];
    }

    if (debouncedValue.length === 0) return [];

    if (debouncedValue.length < 3) return [];

    return dataPokemonNamesIdsList.filter(pokemon =>
      pokemon.name.includes(debouncedValue.toLowerCase())
    )


  }, [debouncedValue])

  const { isLoading: isLoadingPokemons, data: dataPokemons = [] } = useQuery({
    queryKey: ['pokemons', "by", pokemonNamesIdsListFiltered],
    queryFn: () => getPokemonsByIds(pokemonNamesIdsListFiltered.map(pokemon => pokemon.id)),
    staleTime: 1000 * 60 * 5 // 5min
  })

  if (isLoading) {
    return <FullScreenLoader />
  }

  return (
    <View style={[globalTheme.globalMargin, { paddingTop: top + 10 }]}>
      <TextInput
        placeholder='Buscar pokemon'
        mode='flat'
        autoFocus
        autoCorrect={false}
        onChangeText={setTerm}
        value={term}
      />
      {isLoadingPokemons &&
        <ActivityIndicator
          style={{ paddingTop: 20 }}
        />
      }
      {/* <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        {pokemonNamesIdsListFiltered.length} resultados para: {term}
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        Filtrados: {JSON.stringify(pokemonNamesIdsListFiltered, null, 2)}
      </Text> */}
      <FlatList
        data={dataPokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        style={{ paddingTop: top + 20 }}
        renderItem={({ item: pokemon }) => <PokemonCard pokemon={pokemon} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 100 }}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({})

export default SearchScreen;
