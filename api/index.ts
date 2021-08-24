import {
  BasicPokemonInfo,
  GetPokemonByURLResponse,
  GetPokemonsResponse,
} from './types';

export const getPokemons = (limit: number): Promise<BasicPokemonInfo[]> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    .then(response => response.json())
    .then(({results}: GetPokemonsResponse) =>
      Promise.all(results.map(({url}) => getPokemonByUrl(url))),
    )
    .catch(_ => []);
};

const getPokemonByUrl = (url: string): Promise<BasicPokemonInfo> => {
  return fetch(url)
    .then(response => response.json())
    .then((pokemon: GetPokemonByURLResponse) => {
      return {
        name: pokemon.name,
        imageUrl: pokemon.sprites.other['official-artwork'].front_default,
      };
    });
};
