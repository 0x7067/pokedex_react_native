import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import {BasicPokemonInfo} from '../types';
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
    // @TODO: create better components
    <View>
      <Text>{name}</Text>
      <Image
        source={{uri: imageUrl}}
        style={{width: width * 0.8, height: width * 0.8}}
      />
      {pokeTypes.map(({name}) => (
        <PokeType key={name} typeName={name} />
      ))}
    </View>
  );
};
