import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {BasicPokemonInfo} from '../types';
import styled from 'styled-components/native';

interface PokemonButtonProps {
  onPressCallback: () => void;
  pokemon: BasicPokemonInfo;
}
const StyledButton = styled.Pressable`min-width: 30%;
margin-horizontal: 1.5%;
margin-vertical: 1.5%;
align-items: center;
justify-content: center;
border-width: 2px;
border-color: red;`

export const PokemonButton = ({
  onPressCallback,
  pokemon,
}: PokemonButtonProps) => {
  return (
    <StyledButton
      key={pokemon.name}
      onPress={onPressCallback}>
      <View>
        <Text>{pokemon.name}</Text>
        <Image
          source={{uri: pokemon.imageUrl}}
          style={{width: 60, height: 60}}
        />
      </View>
    </StyledButton>
  );
};
