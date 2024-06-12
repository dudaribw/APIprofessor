import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import { StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native';



const HomeScreen = () => {

  const navigation = useNavigation();

  return (

    <ScrollView style={styles.tudo}>


      <View >
        <StatusBar backgroundColor='#F18F01' />

        <View style={styles.fundo}>

          <TouchableOpacity onPress={() => navigation.navigate('Professor')} style={styles.button}>
            <Text style={styles.buttontext}>Consulta de professores</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fundo}>

          <TouchableOpacity onPress={() => navigation.navigate('Sala')} style={styles.button}>
            <Text style={styles.buttontext}>Consulta de Salas</Text>
          </TouchableOpacity>
        </View>

      </View>


      <View >

        <View style={styles.fundo}>

          <TouchableOpacity onPress={() => navigation.navigate('Alocacao')} style={styles.button}>
            <Text style={styles.buttontext}>Consulta de Alocações</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.fundo}>

          <TouchableOpacity onPress={() => navigation.navigate('Visao')} style={styles.button}>
            <Text style={styles.buttontext}>Consulta de Visão de alocações</Text>
          </TouchableOpacity>        </View>
      </View>

      <View style={styles.fundo}>

        <TouchableOpacity onPress={() => navigation.navigate('Sobre')} style={styles.button}>
          <Text style={styles.buttontext}>Sobre Nós</Text>
        </TouchableOpacity>        </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>SENAI- SP Valinhos 2024 - Curso Desenvolvimento de Sistemas G2</Text>
      </View>





    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  cabecalho: {
    backgroundColor: 'black',
    width: "100%",
    height: 150,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: "white",
    fontFamily: 'georgia',
    fontSize: 30,

  },
  tudo: {
    backgroundColor: '#C3CBF1'
  },

  imagem: {
    width: 200,
    height: 200,
    justifyContent: 'flex-end',
    border: "2px solid black",


  },

  fundo: {
    display: 'flex',
    color: "black",
    alignItems: "center",
    marginTop: 30
  },



  button: {
    alignItems: 'center',
    backgroundColor: '#646C8E',
    padding: 10,
    width: "50%",
    height: '120%',
    borderRadius: '5px'
  },

  buttontext: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 839,
    height: 50,
    backgroundColor: '#646C8E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',

  },


});