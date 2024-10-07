import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Filtros = ({ navigation, route }) => {
  // Pegando o meioTransporte e rotaEscolhida dos parâmetros da rota, com valores padrão
  const { meioTransporte = 'Não selecionado', rotaEscolhida = 'Não selecionado', TipoDestino = 'Não selecionado'} = route.params || {};

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>Escolher preferências</Text>
      
      <TouchableOpacity 
        style={styles.filterOption}
        onPress={() => navigation.navigate('FiltroMeioTransporte')}
      >
        <Text style={styles.optionText}>Meio de transporte</Text>
        <View style={styles.optionRightContent}>
          <Text style={styles.optionValue}>{meioTransporte}</Text>
          <Text style={styles.chevron}>›</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.filterOption}
        onPress={() => navigation.navigate('EscolherRota')}
      >
        <Text style={styles.optionText}>Escolher Rotas</Text>
        <View style={styles.optionRightContent}>
          <Text style={styles.optionValue}>{rotaEscolhida}</Text>
          <Text style={styles.chevron}>›</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.applyButton}
        onPress={() => navigation.navigate('InicialTour')}
      >
        <Text style={styles.applyButtonText}>Aplicar filtros</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  filterOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  optionText: {
    fontSize: 16,
  },
  optionRightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionValue: {
    fontSize: 16,
    color: '#888',
    marginRight: 5,
  },
  chevron: {
    fontSize: 20,
    color: '#888',
  },
  applyButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Filtros;