import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, FlatList } from 'react-native';

const locais = [
  'Parque Ibirapuera',
  'Praia de Copacabana',
  'Shopping Iguatemi',
  'Museu do Ipiranga',
  'Teatro Municipal',
  'Estádio do Morumbi',
  'Jardim Botânico',
  'Parque da Água Branca',
  'Praça da Sé',
  'Avenida Paulista',
];

const EscolherRota = ({ navigation }) => {
  const [rota, setRota] = useState('');
  const [sugestoes, setSugestoes] = useState([]);

  const confirmarRota = () => {
    navigation.navigate('Filtros', { rotaEscolhida: rota });
  };

  const handleInputChange = (text) => {
    setRota(text);
    if (text) {
      const filteredSugestoes = locais.filter(local => 
        local.toLowerCase().includes(text.toLowerCase())
      );
      setSugestoes(filteredSugestoes);
    } else {
      setSugestoes([]);
    }
  };

  const selectSuggestion = (suggestion) => {
    setRota(suggestion);
    setSugestoes([]); // Limpa as sugestões após selecionar
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Localização</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.closeButton}>X</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={rota}
            onChangeText={handleInputChange}
            placeholder="Nome do local"
            placeholderTextColor="#fffff"
            onSubmitEditing={confirmarRota}
          />
          <TouchableOpacity 
            style={styles.filterOption}
            onPress={() => navigation.navigate('FiltroMeioTransporte')}
          ></TouchableOpacity>
          
          {sugestoes.length > 0 && (
            <FlatList
              data={sugestoes}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => selectSuggestion(item)}>
                  <Text style={styles.suggestion}>{item}</Text>
                </TouchableOpacity>
              )}
              style={styles.suggestionList}
            />
            
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center', // Centraliza verticalmente
    padding: 20,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
    marginBottom: 20, // Aumenta a margem inferior para afastar do campo de entrada
  },
  backButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  closeButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    padding: 20,
    position: 'relative',
    alignItems: 'center', // Centraliza o campo de entrada horizontalmente
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: '100%', // Garante que o campo de entrada ocupe toda a largura
  },
  suggestionList: {
    maxHeight: 150,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: '#fff',
    zIndex: 1,
    width: '100%',
  },
  suggestion: {
    padding: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f9f9f9',
  },
  filterOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#53a65b',
  },
});

export default EscolherRota;