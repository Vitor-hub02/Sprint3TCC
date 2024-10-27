// meu-tour-atualizado-expo/src/Components/DetalhesParque.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const parkDetails = [
  {
    title: 'Parque Central',
    petsAllowed: true,
    closingTime: '22:00',
    restaurants: ['Restaurante Da Vila', 'Bistrô Del Parque', 'Café Verde'],
    nearbyDestinations: ['Museu Histórico', 'Jardim Botânico'],
    image: require('../assets/parqueCentral.jpg'),
  },
  {
    title: 'Parque Villa Lobos',
    petsAllowed: false,
    closingTime: '19:00',
    restaurants: ['Córtes', 'ICL Brasserie'],
    nearbyDestinations: ['Roda Rico São Paulo', 'Teatro Frei Caneca'],
    image: require('../assets/parqueVilaLobos.jpg'),
  },
  {
    title: 'Parque Ecológico do Tietê',
    petsAllowed: true,
    closingTime: '17:00',
    restaurants: ['Restaurante 339', 'Bar do Linguiça'],
    nearbyDestinations: ['Neo Quimica Arena', 'Teatro Flávio Império'],
    image: require('../assets/parqueEcologico.jpg'),
  },
  {
    title: 'Parque da Independência',
    petsAllowed: true,
    closingTime: '20:00',
    restaurants: ['Nico Pasta & Basta', 'Magic Chicken'],
    nearbyDestinations: ['Museu Paulista', 'Museu do Ipiranga'],
    image: require('../assets/parqueInde.jpg'),
  },
  {
    title: 'Horto Florestal',
    petsAllowed: false,
    closingTime: '18:00',
    restaurants: ['Zekafe', 'Brunch no palácio do Horto'],
    nearbyDestinations: ['Pinacoteca do Estado de São Paulo', 'Teatro Porto Seguro'],
    image: require('../assets/hortoFlorestal.jpg'),
  },
  {
    title: 'Parque Do Povo',
    petsAllowed: true,
    closingTime: '22:00',
    restaurants: ['Bar Espirito Santo', 'Varanda JK Iguatemi'],
    nearbyDestinations: ['Vento Forte - Sala dos Pés- Teatro', 'Shopping Iguatemi'],
    image: require('../assets/parquePovo.jpg'),
  },
  {
    title: 'Parque Estadual da Cantareira',
    petsAllowed: false,
    closingTime: '17:00',
    restaurants: ['Osteria da onça', 'Zekafe'],
    nearbyDestinations: ['Pinacoteca do Estado de São Paulo', 'Horto Florestal'],
    image: require('../assets/ParqueEstadual.jpg'),
  },
  {
    title: 'Parque Da Água Branca',
    petsAllowed: true,
    closingTime: '20:00',
    restaurants: ['DoRo Gastronomia', 'A Baianeira'],
    nearbyDestinations: ['Feira do Produtor Orgânico', 'Espaço Unimed'],
    image: require('../assets/ParqueAgua.jpg'),
  },
  {
    title: 'Parque Burle Marx',
    petsAllowed: true,
    closingTime: '19:00',
    restaurants: ['Tangara Jean-Georges', 'Pateo do Palácio'],
    nearbyDestinations: ['Parque Ibirapuera', 'Teatro Alfa'],
    image: require('../assets/ParqueBurle.jpg'),
  },
  {
    title: 'Parque Tenente Siqueira Campos',
    petsAllowed: true,
    closingTime: '20:00',
    restaurants: ['Noah Gastronomia Paulista', 'Seen - Restaurant & Bar'],
    nearbyDestinations: ['Avenida Paulista', 'Feira de antiguidades da Paulista'],
    image: require('../assets/ParqueTenente.jpg'),
  },
  {
    title: 'Parque da Aclimação',
    petsAllowed: true,
    closingTime: '20:00',
    restaurants: ['Mr.Texas Pizza Pan', 'Moah Restaurante'],
    nearbyDestinations: ['Biblioteca Municipal Raul Bopp', 'Bairro da Liberdade'],
    image: require('../assets/ParqueAclimacao.jpg'),
  },
  {
    title: 'Parque do Carmo',
    petsAllowed: true,
    closingTime: '20:00',
    restaurants: ['Au Au Lanches', 'Sushi D Carmo'],
    nearbyDestinations: ['Sesc Itaquera', 'Neo Química Arena'],
    image: require('../assets/parque-do-carmo.jpg'),
  },
];

const Parques = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {parkDetails.map((park, index) => (
          <View key={index} style={styles.card}>
            <Image source={park.image} style={styles.image} />
            <Text style={styles.cardTitle}>{park.title}</Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Icon name={park.petsAllowed ? 'paw' : 'ban'} size={20} color={park.petsAllowed ? '#4CAF50' : '#e74c3c'} />
                <Text style={styles.infoText}>
                  Pets: {park.petsAllowed ? 'Permitido' : 'Não permitido'}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Icon name="clock-o" size={20} color="#666" />
                <Text style={styles.infoText}>Fecha às: {park.closingTime}</Text>
              </View>
            </View>
            <Text style={styles.subTitle}>Restaurantes Próximos:</Text>
            {park.restaurants.map((restaurant, idx) => (
              <Text key={idx} style={styles.listItem}>{restaurant}</Text>
            ))}
            <Text style={styles.subTitle}>Destinos Próximos:</Text>
            {park.nearbyDestinations.map((destination, idx) => (
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
});

export default Parques;