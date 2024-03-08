"use client"

import Image from 'next/image'
import { Title } from 'rizzui'
import { formatNumber } from '@/utils/formatNumber'
import { useMemo } from 'react'
import { getPokemonId } from '@/utils/getPokemonId'
import { pokemonQuery } from "@/hooks";

export default function PokemonCard({ url }: { url: string }) {
  const pokemonId = getPokemonId(url);

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`;

  const pokemonDetails = pokemonQuery.usePokemonDetail({ name: pokemonId });
  const { data: pokemonDetail, isLoading, isFetching } = pokemonDetails

  const numberFormat = useMemo(
    () => formatNumber(parseInt(pokemonId)),
    [pokemonId]
  );

  return (
    <div className="">
      <div className="relative">
        {!isFetching ? (
          <div
            className={`relative mx-auto aspect-[4/5.06] w-full overflow-hidden rounded-lg bg-pokemon-${pokemonDetail?.types[0].type.name} cursor-pointer hover:shadow-xl`}
          >
            <Image
              alt="pokemon image"
              src={imgUrl}
              fill
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw"
              className="h-full w-full"
            />
          </div>
        ) : null}

        <div className="w-full absolute top-3">
          <div className="flex flex-row justify-between mx-3 w-100">
            <div>
              <Title
                as="h6"
                className="mb-1 truncate font-bold transition colors hover:text-primary text-white"
              >
                {pokemonDetail?.name.toUpperCase()}
              </Title>
              <Title
                as="h6"
                className="mb-1 truncate font-semibold transition colors hover:text-primary text-white"
              >
                {numberFormat}
              </Title>
            </div>

            <div>
              {pokemonDetail?.types.map((type) => (
                <Title
                  key={type.type.name}
                  as="h6"
                  className="mb-1 truncate font-semibold transition colors hover:text-primary text-white"
                >
                  {type.type.name}
                </Title>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}