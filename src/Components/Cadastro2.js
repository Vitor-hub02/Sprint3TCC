import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

export default function Cadastro2({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emptyFields, setEmptyFields] = useState({});

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length >= 6 && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
  };

  const handleSignUp = () => {
    const newEmptyFields = {
      name: !name,
      email: !email,
      password: !password,
      confirmPassword: !confirmPassword
    };
    setEmptyFields(newEmptyFields);

    if (Object.values(newEmptyFields).some(field => field)) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Senha Inválida', 
        'A senha deve conter:\n' +
        '- No mínimo 6 caracteres\n' +
        '- Pelo menos uma letra maiúscula\n' +
        '- Pelo menos uma letra minúscula\n' +
        '- Pelo menos um número\n' +
        '- Pelo menos um caractere especial (!@#$% etc.)'
      );
      return;
    }

    createUser();
  };

  const createUser = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await auth().currentUser.updateProfile({ displayName: name });
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!', [
        { text: 'OK', onPress: () => navigation.navigate('Login2') }
      ]);
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  const getInputStyle = (field) => {
    return [
      styles.input,
      emptyFields[field] ? styles.inputError : {}
    ];
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>Crie sua conta</Text>

        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={getInputStyle('name')}
            placeholder="Nome Completo"
            value={name}
            onChangeText={(text) => {
              setName(text);
              setEmptyFields(prev => ({...prev, name: false}));
            }}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={getInputStyle('email')}
            placeholder="Seu e-mail"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmptyFields(prev => ({...prev, email: false}));
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={getInputStyle('password')}
            placeholder="Sua senha"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setEmptyFields(prev => ({...prev, password: false}));
            }}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? "eye-slash" : "eye"} size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={getInputStyle('confirmPassword')}
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              setEmptyFields(prev => ({...prev, confirmPassword: false}));
            }}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Icon name={showConfirmPassword ? "eye-slash" : "eye"} size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login2')}>
          <Text style={styles.loginText}>Já tem uma conta? Faça login</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  inputError: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  signupButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#4CAF50',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});