import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const tempoLivre = [
  { id: 1, texto: 'Parques', icone: 'leaf' },
  { id: 2, texto: 'Museus', icone: 'diamond-outline' },
  { id: 3, texto: 'Shopping', icone: 'fast-food-outline' },
  { id: 4, texto: 'Teatro', icone: 'easel-outline' },
  { id: 5, texto: 'Mercados', icone: 'nutrition' },
  { id: 6, texto: 'Cinemas', icone: 'videocam-outline' },
];

const EscolherPreferencias1 = ({ navigation }) => {
  const [selecoes, setSelecoes] = useState([]);

  const toggleSelecao = (id) => {
    setSelecoes(prevSelecoes => 
      prevSelecoes.includes(id)
        ? prevSelecoes.filter(item => item !== id)
        : [...prevSelecoes, id]
    );
  };

  const handleContinuar = () => {
    if (selecoes.length === 0) {
      alert('Por favor, selecione pelo menos uma preferência para continuar.');
    } else {
      navigation.navigate('EscolherPreferencias2');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
          <Ionicons name="arrow-back" size={24} color="#4A4A4A" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Onde você costuma passar seu tempo livre?</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {tempoLivre.map((tempo) => (
          <TouchableOpacity
            key={tempo.id}
            style={[styles.tempo, selecoes.includes(tempo.id) && styles.tempoSelecionada]}
            onPress={() => toggleSelecao(tempo.id)}
          >
            <Ionicons 
              name={tempo.icone} 
              size={24} 
              color={selecoes.includes(tempo.id) ? '#FFFFFF' : '#4A4A4A'} 
            />
            <Text style={[styles.tempoTexto, selecoes.includes(tempo.id) && styles.tempoTextoSelecionado]}>
              {tempo.texto}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.botaoContinuar}
        onPress={handleContinuar}
      >
        <Text style={styles.botaoContinuarTexto}>Continuar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, // Permite que o título ocupe o espaço disponível
  },
  scrollView: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  tempo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#F0F0F0',
  },
  tempoSelecionada: {
    backgroundColor: '#53a65b',
  },
  tempoTexto: {
    marginLeft: 10,
    fontSize: 16,
    color: '#4A4A4A',
  },
  tempoTextoSelecionado: {
    color: '#FFFFFF',
  },
  botaoContinuar: {
    backgroundColor: '#53a65b',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  botaoContinuarTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EscolherPreferencias1;