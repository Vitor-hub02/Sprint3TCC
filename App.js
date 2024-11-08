import React, { useState, useEffect } from 'react';
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
import RedefinirSenha from './src/Components/RedefinirSenha';
import InicialTour from './src/Components/InicialTour';
import Categorias from './src/Components/Categorias';
import BuscaLocais from './src/Components/BuscaLocais';
import Filtros from './src/Components/Filtros';
import FiltroMeioTransporte from './src/Components/FiltroMeioTransporte';
import EscolherRota from './src/Components/EscolherRota';
import TipoTurismo from './src/Components/TipoTurismo';
import EscolherPreferencias1 from './src/Components/EscolherPreferencias1';
import EscolherPreferencias2 from './src/Components/EscolherPreferencias2';
import EscolherPreferencias3 from './src/Components/EscolherPreferencias3';
import ParqueIbirapuera from './src/Components/ParqueIbirapuera';
import Aquario from './src/Components/Aquario';
import Parques from './src/Components/Parques';
import Mercados from './src/Components/Mercados';
import Museu from './src/Components/Museu';
import Shopping from './src/Components/Shopping';
import Teatro from './src/Components/Teatro';
import Cinemas from './src/Components/Cinemas';
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
        <Stack.Screen 
          name="Inicio" 
          component={Inicio} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro1} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Cadastro2" 
          component={Cadastro2} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CodigoVerificacao" 
          component={CodigoVerificacao} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="EsqueciSenha" 
          component={EsqueciSenha} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Integracao1" 
          component={Integracao1} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Integracao2" 
          component={Integracao2} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Integracao3" 
          component={Integracao3} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RedefinirSenha" 
          component={RedefinirSenha} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="InicialTour" 
          component={InicialTour} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Categorias" 
          component={Categorias} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BuscaLocais" 
          component={BuscaLocais} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Filtros" 
          component={Filtros} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="FiltroMeioTransporte" 
          component={FiltroMeioTransporte} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="EscolherRota" 
          component={EscolherRota} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="TipoTurismo" 
          component={TipoTurismo} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="EscolherPreferencias1" 
          component={EscolherPreferencias1} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="EscolherPreferencias2" 
          component={EscolherPreferencias2} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="EscolherPreferencias3" 
          component={EscolherPreferencias3} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ParqueIbirapuera" 
          component={ParqueIbirapuera} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Aquario" 
          component={Aquario} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Parques" 
          component={Parques} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Mercados" 
          component={Mercados} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Museu" 
          component={Museu} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Shopping" 
          component={Shopping} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Teatro" 
          component={Teatro} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Cinemas" 
          component={Cinemas} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;