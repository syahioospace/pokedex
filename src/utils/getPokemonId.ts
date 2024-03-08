export function getPokemonId(url: string) {
  let urlArry = url.split('/')
  return urlArry[6]
}