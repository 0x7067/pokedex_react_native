import React, {useState, VFC} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  FlatList,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getPokemons} from '../api';
import {BasicPokemonInfo} from '../types';
import {Spinner} from '../components/Spinner';
import {PokemonButton} from '../components/PokemonButton';

export const Pokedex: VFC = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([] as BasicPokemonInfo[]);
  const [next, setNext] = useState('');

  //@TODO: Graceful exit
  getPokemons(40).then(({data, next, error}) => {
    console.log(error);
    data &&
      data.then(pokemons => {
        setLoading(false);
        setData(pokemons);
        setNext(next ?? '');
      });
  });

  const handleOnListEnd = () => {
    if (next) {
      // @TODO: define a function for next "page"
    }
  };
  if (isLoading) {
    // @TODO: skeleton loading
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
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <View>
          <FlatList
            numColumns={3}
            data={data}
            keyExtractor={pokemon => pokemon.name}
            // @TODO: Extract function
            renderItem={({item: pokemon}) => (
              <PokemonButton
                // @TODO: Improve navigation functions with proper types
                onPressCallback={() => {
                  navigation.navigate('PokedexEntry', {pokemon});
                }}
                pokemon={pokemon}
              />
            )}
          />
        </View>
      </View>
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
