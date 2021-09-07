import {GetPokemonsResponse} from './types';
import {BasicPokemonInfo} from '../types';
import {parseGetPokemonByURL} from './parser';

// @TODO: improve error handling
export const getPokemons = (
  limit: number,
): Promise<{
  data: Promise<BasicPokemonInfo[]> | null;
  next: string | null;
  error?: any;
}> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    .then(response => response.json())
    .then(({results, next}: GetPokemonsResponse) => ({
      next,
      data: Promise.all(results.map(({url}) => getPokemonByUrl(url))),
    }))
    .catch(error => ({next: null, data: null, error}));
};

const getPokemonByUrl = (url: string): Promise<BasicPokemonInfo> => {
  return fetch(url)
    .then(response => response.json())
    .then(parseGetPokemonByURL);
};
