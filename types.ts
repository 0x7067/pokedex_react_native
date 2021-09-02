export interface BasicPokemonInfo {
  name: string;
  imageUrl: string;
  abilities: Ability[];
  baseExperience: number;
  stats: Stat[];
  pokeTypes: PokeType[];
}

interface Ability {
  name: string;
  url: string;
}

interface Stat {
  base: number;
  name: string;
  url: string;
}

interface PokeType {
  slot: number;
  name: string;
  url: string;
}
