"use client"

import PokemonCard from "@/components/card/PokemonCard"
import { pokemonQuery } from "@/hooks"
import { useCallback } from "react"
import { shortDataPokemon } from "@/utils/sortPokemon"

const PokemonList = () => {
  const pokemon = pokemonQuery.usePokemonData()

  const sortPokemon = useCallback(
    () => shortDataPokemon(pokemon?.data?.results ?? []),
    [pokemon]
  );

  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-x-5 gap-y-6 @md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] @xl:gap-x-7 @xl:gap-y-9 @4xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] @6xl:grid-cols-[repeat(auto-fill,minmax(364px,1fr))]">
        {sortPokemon()?.map((pokemon) => (
          <PokemonCard key={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList
