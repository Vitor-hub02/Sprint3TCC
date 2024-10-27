// meu-tour-atualizado-expo/src/Components/DetalhesParque.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const pracaDetails = [
  {
    title: 'Praça Dom Orione',
    petsAllowed: true,
    closingTime: 'Não possui horário',
    restaurants: ['Méqui 1000', 'Restaurante Lamem Aska', 'Sol y Sombra'],
    nearbyDestinations: ['Praça Vilaboim', 'Feira do Bixiga'],
    image: require('../assets/pracaOrione.jpg'),
  },
  {
    title: 'Praça Vinícius de Moraes',
    petsAllowed: true,
    closingTime: 'Não possui horário',
    restaurants: ['Blooming Burger', 'Burning'],
    nearbyDestinations: ['Teatro José Ermírio de Morais', 'Parque Alfredo Volpi'],
    image: require('../assets/PracaVinicius.jpg'),
  },
  {
    title: 'Praça da República',
    petsAllowed: true,
    closingTime: 'Não possui horário',
    restaurants: ['Solar da República - Vila Buarque', 'A casa do Porco'],
    nearbyDestinations: ['Edifício Itália', 'Coreto da Praça da República'],
    image: require('../assets/PracaRepublica.jpg'),
  },
  {
    title: 'Praça da Sé',
    petsAllowed: true,
    closingTime: 'Não possui horário',
    restaurants: ['Sushi Isao', 'Mugui', 'Casa de Francisca'],
    nearbyDestinations: ['Espaço dos Satyros Um - Teatro', 'Caixa Cultural'],
    image: require('../assets/PracaSe.jpg'),
  },
  {
    title: 'Praça Vilaboim',
    petsAllowed: true,
    closingTime: 'Não possui horário',
    restaurants: ['Ráscal', 'Carlota', 'Bacio di Latte'],
    nearbyDestinations: ['Museu de Arte Brasileira', 'Instituto Artium de Cultura'],
    image: require('../assets/pracaVilaboim.jpg'),
  },
  {
    title: 'Praça Ramos de Azevedo',
    petsAllowed: true,
    closingTime: 'Não possui horário',
    restaurants: ['Salve Jorge', 'Ponto Chic'],
    nearbyDestinations: ['Theatro Municipal de São Paulo', 'Centro de Memória Votorantim'],
    image: require('../assets/pracaRamos.jpg'),
  },
  {
    title: 'Parque Estadual da Cantareira',
    petsAllowed: true,
    closingTime: 'Não possui horário',
    restaurants: ['Salve Jorge', 'Ponto Chic'],
    nearbyDestinations: ['Theatro Municipal de São Paulo', 'Galeria do Rock'],
    image: require('../assets/pracaArtes.jpg'),
  },
  {
    title: 'Praça Victor Civita',
    petsAllowed: true,
    closingTime: 'Não possui horário',
    restaurants: ['Tantra', 'Parrillada Fuego Celeste'],
    nearbyDestinations: ['Sesc Pinheiros', 'Instituto Tomie Ohtake'],
    image: require('../assets/PracaVictor.jpg'),
  },
  {
    title: 'Praça Panamericana',
    petsAllowed: true,
    closingTime: 'Não possui horário',
    restaurants: ['Senzala Bar & Grill', 'Leo Dolci'],
    nearbyDestinations: ['Orquidário Ruth Cardoso', 'Parque Ibirapuera'],
    image: require('../assets/pracaPan.jpg'),
  },
  {
    title: 'Praça Sílvio Romero',
    petsAllowed: true,
    closingTime: 'Não possui horário',
    restaurants: ['Koa Poke by Kauai Restraurante', 'Rinconcito Peruano'],
    nearbyDestinations: ['Sesc Belenzinho', 'PopHaus'],
    image: require('../assets/pracaSilvio.jpg'),
  },
  {
    title: 'Praça Pôr Do Sol ',
    petsAllowed: true,
    closingTime: 'Não possui horário',
    restaurants: ['EAP Empório Alto dos Pinheiros', 'Teus Restaurante Bar'],
    nearbyDestinations: ['Avenida Paulista', 'Parque Ibirapuera'],
    image: require('../assets/pracaPor.jpg'),
  },
  {
    title: 'Praça Cornélia',
    petsAllowed: true,
    closingTime: 'Não possui horário',
    restaurants: ['Cacilda Bar Restaurante', 'Villa Lucco'],
    nearbyDestinations: ['Teatro Piafraus', 'Sesc Pompeia'],
    image: require('../assets/pracaCornelia.jpg'),
  },
];

const Praca = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {pracaDetails.map((praca, index) => (
          <View key={index} style={styles.card}>
            <Image source={praca.image} style={styles.image} />
            <Text style={styles.cardTitle}>{praca.title}</Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Icon name={praca.petsAllowed ? 'paw' : 'ban'} size={20} color={praca.petsAllowed ? '#4CAF50' : '#e74c3c'} />
                <Text style={styles.infoText}>
                  Pets: {praca.petsAllowed ? 'Permitido' : 'Não permitido'}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Icon name="clock-o" size={20} color="#666" />
                <Text style={styles.infoText}>Fecha às: {praca.closingTime}</Text>
              </View>
            </View>
            <Text style={styles.subTitle}>Restaurantes Próximos:</Text>
            {praca.restaurants.map((restaurant, idx) => (
              <Text key={idx} style={styles.listItem}>{restaurant}</Text>
            ))}
            <Text style={styles.subTitle}>Destinos Próximos:</Text>
            {praca.nearbyDestinations.map((destination, idx) => (
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

export default Praca;