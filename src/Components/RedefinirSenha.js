import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

export default function RedefinirSenha({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (password) => {
    const lengthValid = password.length >= 8 && password.length <= 70;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return lengthValid && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
  };

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    if (!validatePassword(password)) {
      setError('A senha deve conter:\n- De 8 a 70 caracteres\n- Letra maiúscula\n- Letra minúscula\n- Número\n- Símbolo (!@#$% etc.)');
      return;
    }

    try {

      alert('Senha redefinida com sucesso!');
      navigation.navigate('Login2'); // Redirecionar para a tela de login
    } catch (error) {
      setError('Erro ao redefinir a senha. Tente novamente.');
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

      <Text style={styles.title}>Redefinição de senha</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua nova senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.eyeIcon}>
          <Icon name="eye" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirmar nova senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.eyeIcon}>
          <Icon name="eye" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Redefinir</Text>
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
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
});
