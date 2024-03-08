export const routes = {
  main: "/",
  pokemon: {
    pokemonList: "/pokemon-list",
    pokemonDetail: (id: string) => `/pokemon/${id}/detail`
  },
  signIn:"/auth"
}
