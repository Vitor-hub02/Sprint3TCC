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
import Praca from './src/Components/Praca';
import Ciclovias from './src/Components/Ciclovias';
import CentrosCulturais from './src/Components/CentrosCulturais';
import Mercados from './src/Components/Mercados';
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
        <Stack.Screen name="Filtros" component={Filtros} />
        <Stack.Screen name="FiltroMeioTransporte" component={FiltroMeioTransporte} />
        <Stack.Screen name="EscolherRota" component={EscolherRota} />
        <Stack.Screen name="TipoTurismo" component={TipoTurismo} />
        <Stack.Screen name="EscolherPreferencias1" component={EscolherPreferencias1} />
        <Stack.Screen name="EscolherPreferencias2" component={EscolherPreferencias2} />
        <Stack.Screen name="EscolherPreferencias3" component={EscolherPreferencias3} />
        <Stack.Screen name="ParqueIbirapuera" component={ParqueIbirapuera} />
        <Stack.Screen name="Aquario" component={Aquario} />
        <Stack.Screen name="Parques" component={Parques} />
        <Stack.Screen name="Praca" component={Praca} />
        <Stack.Screen name="Ciclovias" component={Ciclovias} />
        <Stack.Screen name="CentrosCulturais" component={CentrosCulturais} />
        <Stack.Screen name="Mercados" component={Mercados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;