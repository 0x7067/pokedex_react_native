import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';

import {Pokedex} from './scenes/Pokedex';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PokedexEntry} from './components/PokedexEntry';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokedex"
          component={Pokedex}
          options={{title: 'Pokedex'}}
        />
        <Stack.Screen
          name="PokedexEntry"
          component={PokedexEntry}
          options={{title: 'Pokedex Entry'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
