import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window'); // Obtendo a largura da tela

export default function CodigoVerificacao({ navigation }) {
  const [code, setCode] = useState('');

  const handleCodeVerification = () => {
    if (code.length === 6) {
      navigation.navigate('RedefinirSenha');
    } else {
      alert('Código inválido. Por favor, insira um código de 6 dígitos.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="green" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.helpButton}>
        <Icon name="question-circle" size={30} color="green" />
      </TouchableOpacity>

      <Text style={styles.title}>Código de Verificação</Text>

      <Text style={styles.description}>
        Um email foi enviado para seu endereço com um código de verificação. Insira-o abaixo para continuar.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Código de verificação"
        value={code}
        onChangeText={setCode}
        keyboardType="number-pad"
        maxLength={6}
      />

      <TouchableOpacity style={styles.button} onPress={handleCodeVerification}>
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  helpButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    fontSize: width < 400 ? 20 : 24, // Ajustando o tamanho do texto com base na largura da tela
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  description: {
    fontSize: width < 400 ? 14 : 16, // Ajustando o tamanho do texto com base na largura da tela
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: '#266951',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});