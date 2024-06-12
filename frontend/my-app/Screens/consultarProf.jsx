import { useState } from 'react';
import { View, Button, Text, FlatList, StyleSheet, StatusBar } from "react-native";

const API_URL = "http://192.168.1.16:3000";

export default function ConsultarProfessor() {
  const [professores, setProfessores] = useState([]);
  const fetchProf = async () => {
    try {
      const resposta = await fetch(`${API_URL}/professor`);
      if (!resposta.ok) {
        throw new Error(`Erro ao buscar o(a) Professor(a): ${resposta.status}`);
      }
      const dados = await resposta.json();
      setProfessores(dados);

    } catch (error) {
      console.error("Erro ao buscar o(a) Professor(a):", error);

    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#F18F01' />
      <Text style={styles.prof}> Professores </Text>
      <View style={styles.fundo}>
        <Button color={"#646C8E"} title="Consultar Professor(a)" onPress={fetchProf} />
      </View>

      <FlatList
       style={styles.exib}
        data={professores}
        keyExtractor={(item) => item.id_prof.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.exibDados}> ID: {item.id_prof.toString()} </Text>
            <Text style={styles.exibDados}> Nome do Professor: {item.nome} </Text>
            <Text style={styles.exibDados}> Telefone: {item.telefone.toString()} </Text>
            <Text> </Text>
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
  cabecalho: {
    backgroundColor: "#646C8E",
    color: "white",
    fontFamily: "Arial",
    fontSize: 30,
    textAlign: "center"
  },

  exibDados:{
   
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',


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

  prof: {
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