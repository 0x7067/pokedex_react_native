import {
  BasicPokemonInfo,
  GetPokemonByURLResponse,
  GetPokemonsResponse,
  GetPokemonByNameResponse,
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
      const abilities = pokemon.abilities.map(({ability}) => ability);

      const stats = pokemon.stats.map(({base_stat, stat: {name, url}}) => ({
        base: base_stat,
        name: name,
        url: url,
      }));

      const imageUrl = pokemon.sprites.other['official-artwork'].front_default;

      const pokeTypes = pokemon.types.map(({slot, type: {name, url}}) => ({
        name,
        slot,
        url,
      }));
      return {
        baseExperience: pokemon.base_experience,
        abilities,
        stats,
        name: pokemon.name,
        imageUrl,
        pokeTypes,
      };
    });
};
