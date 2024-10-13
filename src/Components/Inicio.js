import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Bem-vindo ao TourGuide</Text>
        <Text style={styles.subheading}>Descubra como viajar de forma sustentável e responsável</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Integracao1')}
        >
          <Text style={styles.buttonText}>Começar Jornada</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.orText}
        onPress={() => navigation.navigate('EscolherPreferencias1')}
        >
        <Text style={styles.skipText}>Pular apresentação</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#266951',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20, // Adicione esta linha para dar espaço entre o botão e o orText
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    alignSelf: 'center',
    marginTop: 10, // Ajuste este valor conforme necessário
  },
  skipText: {
    color: '#266951',
    fontSize: 16,
    fontWeight: '600',
  },
});