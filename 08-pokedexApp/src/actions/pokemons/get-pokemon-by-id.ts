import { pokemonApi } from "../../config/api/pokemonApi";
import { PokeAPIPokemon } from "../../infrastructure/interfaces/pokeApi.interfaces";
import { Pokemon } from '../../domain/entities/pokemon';
import { PokemonMapper } from "../../infrastructure/mappers/pokemon.mapper";

export const getPokemonById = async (id: number): Promise<Pokemon> => {
  try {
    const { data } = await pokemonApi.get<PokeAPIPokemon>(`/pokemon/${id}`)

    const pokemon = await PokemonMapper.pokeApiPokemonToEntity(data);
    return pokemon;

  } catch (error) {
    throw new Error(`Error getting pokemon by id: ${id}`);
  }
}