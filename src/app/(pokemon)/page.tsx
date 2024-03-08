"use client"

import PokemonList from "./pokemon-list/page"
import { storage } from "@/utils/storage";
import { routes } from "@/config/routes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const DefaultPage = () => {
  const pathName = usePathname()
  const router = useRouter()
  useEffect(() => {
    if (storage.getToken() === null) {
      router.replace(routes.signIn)
    }
  }, [storage.getToken(), pathName])
  return <PokemonList />;
}

export default DefaultPage