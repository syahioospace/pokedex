import { pokemonQuery } from "@/hooks";

export function getPokemonDetail(id: string) {
  const pokemonDetail = pokemonQuery.usePokemonDetail({ name: id });
  console.log(pokemonDetail)
  return pokemonDetail?.data
}
