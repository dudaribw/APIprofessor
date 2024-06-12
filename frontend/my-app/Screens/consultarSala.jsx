import { useState } from 'react';
import { View, Button, Text, FlatList, StyleSheet, StatusBar } from "react-native";

const API_URL = "http://192.168.1.16:3000";

export default function ConsultarSala() {
  const [salas, setSalas] = useState([]);

  const fetchSala = async () => {
    try {
      const resposta = await fetch(`${API_URL}/sala`);
      if (!resposta.ok) {
        throw new Error(`Erro ao buscar a sala: ${resposta.status}`);
      }
      const dados = await resposta.json();
      setSalas(dados);
      
    } catch (error) {
      console.error("Erro ao buscar a sala:", error);
 
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#F18F01' />
      <Text style={styles.sala}> Salas </Text>
      <View style={styles.fundo}>
      <Button color={"#646C8E"} title="Consultar Alocações" onPress={fetchSala} />
      </View>

      <FlatList
       style={styles.exib}
        data={salas}
        keyExtractor={(item) => item.id_sala.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.exibDados}> ID: {item.id_sala.toString()} </Text>
            <Text style={styles.exibDados}> Nome da Sala: {item.nomesala} </Text>
            <Text style={styles.exibDados}> Bloco: {item.bloco.toString()} </Text>
            <Text style={styles.exibDados}> </Text>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>SENAI- SP Valinhos 2024 - Curso Desenvolvimento de Sistemas G2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3CBF1'
  },

  
  exibDados:{
   
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',


  },

  fundo: {
    display: 'flex',
    color: "black",
    alignItems: "center",
    marginTop: 100
  },

  exib: {
    marginLeft: 600,
    marginRight: 600,
    marginTop: 50,
    marginBottom: 100,
    backgroundColor: "#646C8E",


  },
  cabecalho: {
    backgroundColor: "#646C8E",
    color: "white",
    fontFamily: "Arial",
    fontSize: 30,
    textAlign: "center"
  },
  sala: {
    backgroundColor: "#646C8E",
    color: "white",
    fontFamily: "Arial",
    fontSize: 80,
    textAlign: "center",
    height: 100,
  },
  error: {
    color: "red",
    fontSize: 18,
    textAlign: "center"
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