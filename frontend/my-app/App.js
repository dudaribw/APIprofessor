import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import Professor from './Screens/consultarProf';
import Sala from './Screens/consultarSala';
import Alocacao from './Screens/consultarAlocacao';
import Visao from './Screens/consultarVisao';
import Sobre from './Screens/sobre'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Professor" component={Professor} />
        <Stack.Screen name="Sala" component={Sala} />
        <Stack.Screen name="Alocacao" component={Alocacao} />
        <Stack.Screen name="Visao" component={Visao} />
        <Stack.Screen name="Sobre" component={Sobre} />

      </Stack.Navigator>
    </NavigationContainer>
  )}
