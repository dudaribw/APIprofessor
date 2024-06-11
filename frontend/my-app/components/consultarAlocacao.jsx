import { useState, useEffect } from 'react';
import {ScrollView ,View, Button, Text, FlatList, StyleSheet, StatusBar } from "react-native";

const API_URL = "http://10.136.42.30:3000";

export default function ConsultarProfessor() {
  const [professores, setProfessores] = useState([]); // Initialize professores as an empty array
  const [error, setError] = useState(null);

  const fetchProf = async () => {
    try {
      const response = await fetch(`${API_URL}/alocacao`);
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
    <View style={styles.container}>
      <StatusBar backgroundColor='#F18F01' />

      <View style={styles.container}>
        <Text style={styles.cabecalho}> Onde está o professor? </Text>

        <Text style={styles.prof}> Professores </Text>

        <Button title="Consultar professor(a)" onPress={fetchProf} />

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível
  },
});