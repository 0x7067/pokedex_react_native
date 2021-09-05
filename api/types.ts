import {PokeTypeNames} from '../types';

export interface GetPokemonsResponse {
  results: {
    url: string;
  }[];
  next: string;
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
  type: {name: PokeTypeNames; url: string};
}

export interface GetPokemonByURLResponse {
  name: string;
  sprites: RawSprite;
  base_experience: number;
  abilities: RawAbility[];
  stats: RawStats[];
  types: RawType[];
}

export interface GetPokemonByNameResponse {}
