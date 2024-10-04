import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const opcoes = [
  { id: 1, texto: 'Parques', icone: 'flower' },
  { id: 2, texto: 'Praças e áreas verdes urbanas', icone: 'leaf' },
  { id: 3, texto: 'Ciclovias e trilhas para caminhadas', icone: 'bicycle' },
  { id: 4, texto: 'Centros culturais ao ar livre', icone: 'business' },
  { id: 5, texto: 'Mercados e feiras locais', icone: 'cart' },
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Onde você costuma passar seu tempo livre?</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {opcoes.map((opcao) => (
          <TouchableOpacity
            key={opcao.id}
            style={[
              styles.opcao,
              selecoes.includes(opcao.id) && styles.opcaoSelecionada
            ]}
            onPress={() => toggleSelecao(opcao.id)}
          >
            <Ionicons
                name={opcao.icone} 
                size={24} 
                color={selecoes.includes(opcao.id) ? '#FFFFFF' : '#4A4A4A'} 
            />
            <Text style={[
              styles.opcaoTexto,
              selecoes.includes(opcao.id) && styles.opcaoTextoSelecionado
            ]}>
            {opcao.texto}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.botaoContinuar}
        onPress={() => navigation.navigate('EscolherPreferencias2')}
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
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  opcao: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#F0F0F0',
  },
  opcaoSelecionada: {
    backgroundColor: '#266951',
  },
  opcaoTexto: {
    marginLeft: 10,
    fontSize: 16,
    color: '#4A4A4A',
  },
  opcaoTextoSelecionado: {
    color: '#FFFFFF',
  },
  botaoContinuar: {
    backgroundColor: '#266951',
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