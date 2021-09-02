import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import {BasicPokemonInfo} from '../types';

export const PokedexEntry = ({
  route: {
    params: {pokemon},
  },
}: any) => {
  // @TODO: fix type
  const {name, imageUrl, abilities, baseExperience, stats, pokeTypes} =
    pokemon as BasicPokemonInfo;
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
        <Text key={name}>{name}</Text>
      ))}
    </View>
  );
};
