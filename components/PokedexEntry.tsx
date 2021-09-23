import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import {BasicPokemonInfo} from '../types';
import {PokeType} from './Poketype';
import styled, {css} from 'styled-components/native';

// @TODO: separate this in another file
const PokemonAvatar = styled.Image<{size: number}>`
  ${props => {
    const size = props.size * 0.8;
    return css`
      width: ${size}px;
      height: ${size}px;
    `;
  }}
`;

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
      <PokemonAvatar size={width} source={{uri: imageUrl}} />
      {pokeTypes.map(({name}) => (
        <PokeType key={name} typeName={name} />
      ))}
    </View>
  );
};
