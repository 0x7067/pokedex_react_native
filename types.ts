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
  name: PokeTypeNames;
  url: string;
}

export enum PokeTypeNames {
  'Normal' = 'Normal',
  'Fire' = 'Fire',
  'Fighting' = 'Fighting',
  'Water' = 'Water',
  'Flying' = 'Flying',
  'Grass' = 'Grass',
  'Poison' = 'Poison',
  'Electric' = 'Electric',
  'Ground' = 'Ground',
  'Psychic' = 'Psychic',
  'Rock' = 'Rock',
  'Ice' = 'Ice',
  'Bug' = 'Bug',
  'Dragon' = 'Dragon',
  'Ghost' = 'Ghost',
  'Dark' = 'Dark',
  'Steel' = 'Steel',
  'Fairy' = 'Fairy',
  '???' = '???',
}
