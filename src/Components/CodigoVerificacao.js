import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  
      <Text style={styles.title}>Código de verificação</Text>
  
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
