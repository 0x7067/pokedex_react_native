import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Spinner} from '../components/Spinner';

export const Pokedex = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([] as any[]);

  getPokemons(151).then(pokemons => {
    setLoading(false);
    setData(pokemons);
  });
  console.log(data);

  if (isLoading) {
    return <Spinner />;
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

const getPokemons = (limit: number) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    .then(response => response.json())
    .then(({results}) =>
      Promise.all(results.map(({url}) => getPokemonByUrl(url))),
    )
    .catch(error => []);
};

const getPokemonByUrl = (url: string) => {
  return fetch(url)
    .then(response => response.json())
    .then(pokemon => {
      const pokemon2 = {
        name: pokemon.name,
        imageUrl: pokemon.sprites.other['official-artwork'].front_default,
      };
      return pokemon2;
    });
};
