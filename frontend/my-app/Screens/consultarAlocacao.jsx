import { useState } from 'react';
import { View, Button, Text, FlatList, StyleSheet, StatusBar } from "react-native";

const API_URL = "http://192.168.1.16:3000";

export default function ConsultarAlocacao() {
  const [alocacoes, setAlocacoes] = useState([]);

  const fetchAloc = async () => {
    try {
      const resposta = await fetch(`${API_URL}/alocacao`);
      if (!resposta.ok) {
        throw new Error(`Erro ao buscar a alocação: ${resposta.status}`);
      }
      const dados = await resposta.json();
      setAlocacoes(dados);

    } catch (error) {
      console.error("Erro ao buscar a alocação:", error);

    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#F18F01' />
      <Text style={styles.aloc}> Alocações </Text>
      <View style={styles.fundo}>
        <Button color={"#646C8E"} title="Consultar Alocações" onPress={fetchAloc} />
      </View>

      <FlatList
        style={styles.exib}
        data={alocacoes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.exibDados}> ID: {item.id.toString()} </Text>
            <Text style={styles.exibDados}> Sala: {item.id_prof} </Text>
            <Text style={styles.exibDados}> Data: {item.id_sala} </Text>
            <Text style={styles.exibDados}> Dia Semana: {item.dia_semana} </Text>
            <Text style={styles.exibDados}> Período: {item.periodo} </Text>
            <Text style={styles.exibDados}> </Text>
          </View>
        )}
      ></FlatList>


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
  cabecalho: {
    backgroundColor: "#646C8E",
    color: "white",
    fontFamily: "Arial",
    fontSize: 30,
    textAlign: "center"
  },

  exib: {
    marginLeft: 600,
    marginRight: 600,
    marginTop: 50,
    marginBottom: 100,
    backgroundColor: "#646C8E",


  },

  fundo: {
    display: 'flex',
    color: "black",
    alignItems: "center",
    marginTop: 100
  },
  aloc: {
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