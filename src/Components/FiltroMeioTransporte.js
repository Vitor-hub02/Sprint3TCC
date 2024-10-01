import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const opcoesMeioTransporte = ['Avião', 'Bicicleta', 'Trens', 'Carro', 'Ônibus', 'A pé'];

const FiltroMeioTransporte = ({ navigation }) => {
  const selecionarMeio = (meio) => {
    navigation.navigate('Filtros', { meioTransporte: meio });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Meio de transporte</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>X</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Qual meio de transporte você deseja utilizar?</Text>

      {opcoesMeioTransporte.map((meio) => (
        <TouchableOpacity
          key={meio}
          style={styles.opcao}
          onPress={() => selecionarMeio(meio)}
        >
          <Text style={styles.opcaoTexto}>{meio}</Text>
          <TouchableOpacity
            style={styles.radio}
            onPress={() => selecionarMeio(meio)}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  opcao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  opcaoTexto: {
    fontSize: 16,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
});

export default FiltroMeioTransporte;