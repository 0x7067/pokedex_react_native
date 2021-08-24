export interface GetPokemonsResponse {
  results: {
    url: string;
  }[];
}

export interface BasicPokemonInfo {
  name: string;
  imageUrl: string;
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
}
