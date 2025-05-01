import { pokemonApi } from "../../config/api/pokemonApi"
import { PokeAPIPaginatedResponse } from "../../infrastructure/interfaces/pokeApi.interfaces"

export const getPokemonsWithNameIds = async () => {
  const url = `pokemon?limit=1000`
  const { data } = await pokemonApi.get<PokeAPIPaginatedResponse>(url)

  return data.results.map((pokemon) => ({
    id: Number(pokemon.url.split("/")[6]),
    name: pokemon.name
  }))
}