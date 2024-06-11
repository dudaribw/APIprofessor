import { useState, useEffect } from 'react';
import {ScrollView ,View, Button, Text, FlatList, StyleSheet, StatusBar} from "react-native";

const API_URL = "http://10.136.42.30:3000";

export default function ConsultarProfessor() {
  const [professores, setProfessores] = useState([]); // Initialize professores as an empty array
  const [error, setError] = useState(null);

  const fetchProf = async () => {
    try {
      const response = await fetch(`${API_URL}/professor`);
      if (!response.ok) {
        throw new Error(`Erro ao buscar o(a) Alocação(a): ${response.status}`);
      }
      const data = await response.json();
      setProfessores(data);
      setError(null);
    } catch (error) {
      console.error("Erro ao buscar o(a) Alocação(a):", error);
      setError("Não foi possível buscar o(a) alocação(a) desejado.");
    }
  };

  return (
    <ScrollView style={styles.body}>
      <StatusBar backgroundColor='#F18F01' />

      <View style={styles.title}>
        <Text style={styles.cabecalho}> Consultar Professor(a) </Text>


        <Button title="Listar professor(a)" onPress={fetchProf} color={"#646C8E"} />

        <Text style={styles.prof}> Nome dos Professores </Text>

        <FlatList
        data={professores} // Use the professores state variable
        keyExtractor={(item) => item.id_prof.toString()}
        renderItem={({ item }) => (
          <ScrollView>
            <Text>ID: {item.id_prof}</Text>
            <Text>Nome do Professor: {item.nome}</Text>
            <Text>Telefone: {item.telefone}</Text>
          </ScrollView>
        )}
      />

        <StatusBar style="auto" />

        <View style={styles.rodape}></View>
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
  },

  body: {
    backgroundColor: "#C3CBF1"
  },

  cabecalho: {
    backgroundColor: "#646C8E",
    color: "white",
    fontFamily: "Arial",
    fontSize: 30,
    textAlign: "center"
  },

  prof:{
    color: "white",
    fontFamily: "Arial",
    fontSize: 20,
    textAlign: "center",
  },

  rodape: {
    backgroundColor: "#646C8E",
      width: 400,
      height: 45,
      alignItems: 'center',
      fontSize: 30,
      justifyContent:'center',
      marginTop: 600,
      
    },

    button:{
      
    }
  },

);