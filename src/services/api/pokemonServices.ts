import { API, axiosClient } from '@/services'

export const getPokemons = (): Promise<API.GetPokemonData.Response> =>
  axiosClient.get(`/api/v2/pokemon`)

export const getPokemonDetail = (
  params: API.GetPokemonDetail.Request
): Promise<API.GetPokemonDetail.Response> =>
  axiosClient.get(`/api/v2/pokemon/${params.name}`);
