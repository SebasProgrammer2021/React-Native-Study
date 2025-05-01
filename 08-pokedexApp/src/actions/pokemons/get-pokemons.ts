import { pokemonApi } from "../../config/api/pokemonApi";
import type { Pokemon } from "../../domain/entities/pokemon";
import type { PokeAPIPaginatedResponse, PokeAPIPokemon } from "../../infrastructure/interfaces/pokeApi.interfaces";
import { PokemonMapper } from "../../infrastructure/mappers/pokemon.mapper";

// export const sleeper = async () => {
//   return new Promise((resolve) => setTimeout(resolve, 2000));
// }
export const getPokemons = async (page: number, limit: number = 20): Promise<Pokemon[]> => {
  // await sleeper();
  try {
    const url = `/pokemon?offset=${page * 10}&limit=${limit}`
    const { data } = await pokemonApi.get<PokeAPIPaginatedResponse>(url);

    const pokemonPromises = data.results.map((pokemon) => {
      return pokemonApi.get<PokeAPIPokemon>(pokemon.url);
    });

    const pokeApiPokemons = await Promise.all(pokemonPromises);
    const pokemonsPromises = pokeApiPokemons.map((pokemon) => {
      console.table(pokemon?.data);

      return PokemonMapper.pokeApiPokemonToEntity(pokemon.data)
    }

    );

    // console.log("🚀 ~ getPokemons ~ pokemons:", pokemonsPromises[0]);

    return Promise.all(pokemonsPromises);
  } catch (error) {
    throw new Error("Error getting pokemons");
  }
}