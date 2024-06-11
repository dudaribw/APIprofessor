import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ConsultarProfessor from './components/consultarProf';

console.log("Oi")

export default function App() {
  return (
    <View style={styles.container}>
      <ConsultarProfessor></ConsultarProfessor>
      <StatusBar style="auto" />
    </View>
  );
}

console.log("Oi2")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

