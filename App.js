import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Livro from './src/pages/Livro';
import Catalogo from './src/pages/Catalogo'

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title:'Inicio',
          headerStyle:{
            backgroundColor: '#121212'
          },
          headerTintColor: '#FFF',
          headerShown: false,
        }}
        />
        <Stack.Screen name="Livro" component={Livro}
        options={{headerShown: false}}  />
        <Stack.Screen name="Catalogo" component={Catalogo} 
        options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

