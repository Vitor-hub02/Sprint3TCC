import React, {useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './index.css';
// Importando suas telas
import LoadingScreen from './src/Components/LoadingScreen';
import Cadastro1 from './src/Components/Cadastro1';
import Cadastro2 from './src/Components/Cadastro2';
import CodigoVerificacao from './src/Components/CodigoVerificacao';
import EsqueciSenha from './src/Components/EsqueciSenha';
import Inicio from './src/Components/Inicio';
import Integracao1 from './src/Components/Integracao1';
import Integracao2 from './src/Components/Integracao2';
import Integracao3 from './src/Components/Integracao3';
import Login from './src/Components/Login';
import Login2 from './src/Components/Login2';
import RedefinirSenha from './src/Components/RedefinirSenha';
import InicialTour from './src/Components/InicialTour';
import Categorias from './src/Components/Categorias';
import BuscaLocais from './src/Components/BuscaLocais';
// Importando as novas telas


const Stack = createNativeStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Cadastro" component={Cadastro1} />
        <Stack.Screen name="Cadastro2" component={Cadastro2} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Login2" component={Login2} />
        <Stack.Screen name="CodigoVerificacao" component={CodigoVerificacao} />
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
        <Stack.Screen name="Integracao1" component={Integracao1} />
        <Stack.Screen name="Integracao2" component={Integracao2} />
        <Stack.Screen name="Integracao3" component={Integracao3} />
        <Stack.Screen name="RedefinirSenha" component={RedefinirSenha} />
        <Stack.Screen name="InicialTour" component={InicialTour} />
        <Stack.Screen name="Categorias" component={Categorias} />
        <Stack.Screen name="BuscaLocais" component={BuscaLocais} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;