import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import {BasicPokemonInfo, PokeTypeNames} from '../types';

export const PokeType = ({typeName}: {typeName: PokeTypeNames}) => {
  return (
    // @TODO: Improve style
    <View style={{backgroundColor: 'gray'}}>
      <Text>{typeName}</Text>
    </View>
  );
};
