import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {BasicPokemonInfo} from '../types';
import {PokemonAvatar} from './PokemonAvatar';
import {PokeType} from './Poketype';

export const PokedexEntry = ({
  route: {
    params: {pokemon},
  },
}: {
  route: {params: {pokemon: BasicPokemonInfo}};
}) => {
  const {name, imageUrl, abilities, baseExperience, stats, pokeTypes} = pokemon;
  const {width} = useWindowDimensions();
  return (
    <View>
      <Text>{name}</Text>
      <PokemonAvatar size={width} source={{uri: imageUrl}} />
      {pokeTypes.map(({name}) => (
        <PokeType key={name} typeName={name} />
      ))}
    </View>
  );
};
