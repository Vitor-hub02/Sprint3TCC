import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import { Ionicons } from '@expo/vector-icons'; // Importar Ionicons

const shpDetails = [
  {
    title: 'Shopping JK Iguatemi',
    petsAllowed: false,
    closingTime: '22:00',
    restaurants: ['Varanda JK Iguatemi', 'Ráscal'],
    nearbyDestinations: ['Roof Top 033', 'Teatro Santander'],
    image: require('../assets/jk-iguatemi.jpg'),
  },
  {
    title: 'Shopping Iguatemi',
    petsAllowed: false,
    closingTime: '22:00',
    restaurants: ['Varanda Faria Lima', 'Piselli Sud'],
    nearbyDestinations: ['Museu da Casa Brasileira', 'Paróquia Nossa Senhora do Perpétuo Socorro'],
    image: require('../assets/iguatemi.jpg'),
  },
  {
    title: 'Shopping Pátio Higienópolis',
    petsAllowed: false,
    closingTime: '22:00',
    restaurants: ['Ráscal', 'Jardim di Napoli'],
    nearbyDestinations: ['Teatro da Folha', 'Auditório Cultura Inglesa - Higienópolis'],
    image: require('../assets/patio-higienopolis.jpg'),
  },
  {
    title: 'Shopping Cidade Jardim',
    petsAllowed: false,
    closingTime: '22:00',
    restaurants: ['Adega Santiago Shopping Cidade Jardim', 'Due Cuochi Cucina - Shopping Cidade Jardim'],
    nearbyDestinations: ['Teatro Santander', 'Shopping JK Iguatemi'],
    image: require('../assets/shopping-cidade-jardim.jpg'),
  },
  {
    title: 'Shopping Anália Franco',
    petsAllowed: true,
    closingTime: '23:00',
    restaurants: ['Effendi', 'Lótus Restaurante Vegetariano', 'Prato Grego'],
    nearbyDestinations: ['Museu da Língua Portuguesa', 'Igreja de São Cristovão'],
    image: require('../assets/shopping-analiafranco.png'),
  },
  {
    title: 'Shopping Frei Caneca',
    petsAllowed: true,
    closingTime: '22:00',
    restaurants: ['Kome Culinaria Japonesa', 'Gulab Hari'],
    nearbyDestinations: ['Centro de Convenções Frei Caneca', 'Teatro Nair Bello'],
    image: require('../assets/frei-caneca.jpg'),
  },
  {
    title: 'Shopping Ibirapuera',
    petsAllowed: false,
    closingTime: '22:00',
    restaurants: ['Shopping Ibirapuera', 'Shopping Ibirapuera'],
    nearbyDestinations: ['Parque Ibirapuera', 'Arte Própria'],
    image: require('../assets/ibirapuera.jpg'),
  },
  {
    title: 'Galeria do Rock',
    petsAllowed: false,
    closingTime: '19:00',
    restaurants: ['Rinconcito Peruano', 'Almanara'],
    nearbyDestinations: ['Galeria Olido', 'Centro de Memória do Circo'],
    image: require('../assets/galeria-rock.jpg'),
  },
  {
    title: 'Shopping Cidade São Paulo',
    petsAllowed: false,
    closingTime: '22:00',
    restaurants: ['Camarada Camarão- Shopping Cidade São Paulo', 'Noah Gastronomia Paulista'],
    nearbyDestinations: ['Teatro Maksoud Plaza', 'Avenida Paulista'],
    image: require('../assets/cidade-sp.jpg'),
  },
  {
    title: 'Shopping Parque da Cidade',
    petsAllowed: false,
    closingTime: '22:00',
    restaurants: ['I Lve Burger', 'Johnny Rockets'],
    nearbyDestinations: ['Altitude Park', 'Pickleball Point'],
    image: require('../assets/parque-cidade.jpg'),
  },
];

const Shopping = () => {
  const navigation = useNavigation(); // Usar o hook useNavigation

  return (
    <View style={styles.container}>
     <TouchableOpacity 
        style={styles.botaoVoltar} 
        onPress={() => navigation.navigate('InicialTour')} // Navegar para InicialTour
      >
        <Ionicons name="arrow-back" size={24} color="#FFFFFF" /> {/* Ícone de voltar */}
      </TouchableOpacity>
      <ScrollView>
        {shpDetails.map((shp, index) => (
          <View key={index} style={styles.card}>
            <Image source={shp.image} style={styles.image} />
            <Text style={styles.cardTitle}>{shp.title}</Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Icon name={shp.petsAllowed ? 'paw' : 'ban'} size={20} color={shp.petsAllowed ? '#4CAF50' : '#e74c3c'} />
                <Text style={styles.infoText}>
                  Pets: {shp.petsAllowed ? 'Permitido' : 'Não permitido'}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Icon name="clock-o" size={20} color="#666" />
                <Text style={styles.infoText}>Fecha às: {shp.closingTime}</Text>
              </View>
            </View>
            <Text style={styles.subTitle}>Restaurantes Próximos:</Text>
            {shp.restaurants.map((restaurant, idx) => (
              <Text key={idx} style={styles.listItem}>{restaurant}</Text>
            ))}
            <Text style={styles.subTitle}>Destinos Próximos:</Text>
            {shp.nearbyDestinations.map((destination, idx) => (
              <Text key={idx} style={styles.listItem}>{destination}</Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    elevation: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#266951',
  },
  infoContainer: {
    marginVertical: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  listItem: {
    fontSize: 16,
    color: '#666',
    marginLeft: 20,
  },
  botaoVoltar: {
    backgroundColor: '#266951',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row', // Para alinhar o ícone
    justifyContent: 'flex-start', // Alinhar à esquerda
  },
});

export default Shopping;