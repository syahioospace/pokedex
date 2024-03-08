import { useQuery } from 'react-query'
import { API, pokemonServices } from '@/services'
import { AppUseQueryOptions } from '../type'
import { queryKey } from '../queryKey'

export const usePokemonData = (
  options?: AppUseQueryOptions<API.GetPokemonData.Response>,
) => useQuery([queryKey.POKEMON_DATA], () => pokemonServices.getPokemons(), options)

export const usePokemonDetail = (
  params: API.GetPokemonDetail.Request,
  options?: AppUseQueryOptions<API.GetPokemonDetail.Response>,
) => useQuery([queryKey.POKEMON_DETAIL, params], () => pokemonServices.getPokemonDetail(params), options)