import {GetPokemonByURLResponse} from './types';

export const parseGetPokemonByURL = (pokemon: GetPokemonByURLResponse) => {
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
};
