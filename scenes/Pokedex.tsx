import React, {useState, VFC} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  SafeAreaView,
  StatusBar,
  ScrollView,
  useColorScheme,
  Pressable,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getPokemons} from '../api';
import {BasicPokemonInfo} from '../types';
import {Spinner} from '../components/Spinner';

export const Pokedex: VFC = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([] as BasicPokemonInfo[]);

  getPokemons(151).then(pokemons => {
    setLoading(false);
    setData(pokemons);
  });
  // @TODO: lazy loading
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
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {data.map(pokemon => (
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
                onPress={() => navigation.navigate('PokedexEntry', {pokemon})}>
                <View>
                  <Text>{pokemon.name}</Text>
                  <Image
                    source={{uri: pokemon.imageUrl}}
                    style={{width: 60, height: 60}}
                  />
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
