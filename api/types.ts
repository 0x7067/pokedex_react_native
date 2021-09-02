export interface GetPokemonsResponse {
  results: {
    url: string;
  }[];
}

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

interface RawSprite {
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}

interface RawAbility {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

interface RawStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface RawType {
  slot: number;
  type: {name: string; url: string};
}

export interface GetPokemonByURLResponse {
  name: string;
  sprites: RawSprite[];
  base_experience: number;
  abilities: RawAbility[];
  stats: RawStats[];
  types: RawType[];
}

export interface GetPokemonByNameResponse {}
