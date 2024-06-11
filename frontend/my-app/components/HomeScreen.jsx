import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import { StatusBar } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';



const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.tudo}>
      <View style={styles.cabecalho}>
        <Text style={styles.texto}>Onde está o professor?</Text>
      </View>

      <View >

        <View style={styles.fundo}>
          <Image
            source={require("../assets/professor.jpg")}
            style={styles.imagem}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Professor')} style={styles.button}>
            <Text style={styles.buttontext}>Consulta de professores</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fundo}>
          <Image
            source={require("../assets/salas.jpg")}
            style={styles.imagem}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Sala')} style={styles.button}>
            <Text style={styles.buttontext}>Consulta de Salas</Text>
          </TouchableOpacity>
        </View>

      </View>


      <View >

        <View style={styles.fundo}>
          <Image
            source={require("../assets/alocacoes.png")}
            style={styles.imagem}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Alocacao')} style={styles.button}>
            <Text style={styles.buttontext}>Consulta de Alocações</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.fundo}>
          <Image
            source={require("../assets/interrogacao.png")}
            style={styles.imagem}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Visao')} style={styles.button}>
            <Text style={styles.buttontext}>Consulta de visão de alocações</Text>
          </TouchableOpacity>        </View>
      </View>

      <View style={styles.fundo}>
          <Image
            source={require("../assets/Grupo.jpeg")}
            style={styles.imagem}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Sobre')} style={styles.button}>
            <Text style={styles.buttontext}>Integrantes do Grupo</Text>
          </TouchableOpacity>        </View>
      


      <StatusBar style="auto" />
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
    backgroundColor: '#a0aecd'
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
    backgroundColor: 'black',
    padding: 10,
    width: "50%",
    border: "2px solid black",
  },

  buttontext: {
    fontFamily: 'georgia',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  }


});