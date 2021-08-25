import React from 'react';
import {View, Text, Image} from 'react-native';

export const PokedexEntry = ({
  route: {
    params: {pokemon},
  },
}: any) => {
  const {name, imageUrl, abilities, baseExperience, stats} = pokemon;

  return (
    <View>
      <Text>{name}</Text>
      <Image source={{uri: imageUrl}} style={{width: 40, height: 40}} />
    </View>
  );
};
