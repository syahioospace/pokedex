type Data = {
  name: string;
  url: string;
}[];

export const shortDataPokemon = (data: Data) => {
  const test = data?.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return test;
};