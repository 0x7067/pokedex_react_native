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

export interface GetPokemonByURLResponse {
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  base_experience: number;
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
}

export interface GetPokemonByNameResponse {}
