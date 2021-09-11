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
import Dialog from 'react-native-dialog';

export const Pokedex: VFC = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([] as BasicPokemonInfo[]);
  const [next, setNext] = useState('');
  const [error, setError] = useState<boolean>(false);

  //@TODO: Graceful exit
  getPokemons(40)
    // @TODO: react query
    .then(({data, next, error}) => {
      //@TODO: deal with this error
      data &&
        data.then(pokemons => {
          setLoading(false);
          setData(pokemons);
          setNext(next ?? '');
        });
    })
    .catch(() => {
      setLoading(false);
      setError(true);
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

      {/* @TODO: Retry when error happens */}
      <Dialog.Container visible={error}>
        <Dialog.Title>Network Error</Dialog.Title>
        <Dialog.Description>
          Something wrong happened. Please try again.
        </Dialog.Description>
        <Dialog.Button label="OK" onPress={() => setError(false)} />
      </Dialog.Container>

      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
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
