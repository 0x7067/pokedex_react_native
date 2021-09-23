import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {BasicPokemonInfo} from '../types';

export const PokemonButton = ({
  // @TODO: Better typing
  onPressCallback,
  pokemon,
}: {
  onPressCallback: () => void;
  pokemon: BasicPokemonInfo;
}) => {
  return (
    <Pressable
      style={{
        minWidth: '30%',
        marginHorizontal: '1.5%',
        marginVertical: '1.5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'red',
      }}
      key={pokemon.name}
      onPress={onPressCallback}>
      <View>
        <Text>{pokemon.name}</Text>
        <Image
          source={{uri: pokemon.imageUrl}}
          style={{width: 60, height: 60}}
        />
      </View>
    </Pressable>
  );
};
