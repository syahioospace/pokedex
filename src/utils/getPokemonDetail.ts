import { pokemonQuery } from "@/hooks";

export function getPokemonDetail(id: string) {
  const pokemonDetail = pokemonQuery.usePokemonDetail({ name: id });
  return pokemonDetail?.data
}
