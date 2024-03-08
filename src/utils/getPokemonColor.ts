export function getPokemonColor(type?: string) {
  switch (type) {
    case "bug":
      return "bg-pokemon-bug";
    case "dark":
      return "bg-pokemon-dark";
    case "dragon":
      return "bg-pokemon-dragon";
    case "electric":
      return "bg-pokemon-electric";
    case "fairy":
      return "bg-pokemon-fairy";
    case "fighting":
      return "bg-pokemon-fighting";
    case "fire":
      return "bg-pokemon-fire";
    case "flying":
      return "bg-pokemon-flying";
    case "ghost":
      return "bg-pokemon-ghost";
    case "grass":
      return "bg-pokemon-grass";
    case "ground":
      return "bg-pokemon-ground";
    case "ice":
      return "bg-pokemon-ice";
    case "normal":
      return "bg-pokemon-normal";
    case "poison":
      return "bg-pokemon-poison";
    case "psychic":
      return "bg-pokemon-psychic";
    case "rock":
      return "bg-pokemon-rock";
    case "steel":
      return "bg-pokemon-steel";
    case "water":
      return "bg-pokemon-water";
    default:
      return null;
  }
}