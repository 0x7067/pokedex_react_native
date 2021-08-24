import React, {useState, VFC} from 'react';
import {View, Text, Image, StyleSheet, Modal} from 'react-native';
import {getPokemons} from '../api/Index';
import {BasicPokemonInfo} from '../api/types';
import {Spinner} from '../components/Spinner';

export const Pokedex: VFC = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([] as BasicPokemonInfo[]);

  getPokemons(151).then(pokemons => {
    setLoading(false);
    setData(pokemons);
  });
  console.log(data);

  if (isLoading) {
    return (
      <Modal>
        <View style={styles.loadingContainer}>
          <Spinner />
        </View>
      </Modal>
    );
  }
  return (
    <View>
      {data.map(pokemon => (
        <View key={pokemon.name}>
          <View style={{flex: 1}}>
            <Text>{pokemon.name}</Text>
            <Image
              source={{uri: pokemon.imageUrl}}
              style={{width: 40, height: 40}}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
