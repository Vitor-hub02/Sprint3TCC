// meu-tour-atualizado-expo/src/Components/DetalhesParque.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const pracaDetails = [
  {
    title: 'Museu Catavento',
    petsAllowed: false,
    closingTime: '16:00',
    restaurants: ['Hocca Bar', 'Mortadela Brasil', 'Bar do Mané'],
    nearbyDestinations: ['Mercado Municipal', 'Feira do Bixiga'],
    image: require('../assets/meseuCatavento.jpg'),
  },
  {
    title: 'Centro Cultural São Paulo',
    petsAllowed: false,
    closingTime: 'Não possui horário',
    restaurants: ['Ponto chic', 'Almanara Restaurante', 'Coco Bambu'],
    nearbyDestinations: ['CC São Paulo', 'Sala Adoniran Barbosa', 'Paróquia Santo Agostinho'],
    image: require('../assets/centrocultural.jpg'),
  },
  {
    title: 'Museu do Futebol',
    petsAllowed: false,
    closingTime: '17:00',
    restaurants: ['Carlota', 'Assado Porteña', 'Tappo Trattoria'],
    nearbyDestinations: ['Estádio do Pacaembu', 'Museu de Arte Brasileira', 'Avenida Paulista'],
    image: require('../assets/museuFutebol.jpg'),
  },
  {
    title: 'Museu da Imigração',
    petsAllowed: false,
    closingTime: '18:00',
    restaurants: ['Shake Baby Bar', 'Cafeteria do museu'],
    nearbyDestinations: ['Passeio de Maria Fumaça', 'Pinacoteca do estado de São Paulo'],
    image: require('../assets/museuImigracao.jpg'),
  },
  {
    title: 'Museu Afro Brasil',
    petsAllowed: false,
    closingTime: '18:00',
    restaurants: ['TastelT Restaurante', 'YuCafe Earth-Based'],
    nearbyDestinations: ['Planetário do Ibirapuera', 'Parque Ibirapuera'],
    image: require('../assets/museuAfro.jpg'),
  },
  {
    title: 'Casa Das Rosas',
    petsAllowed: true,
    closingTime: '18:00',
    restaurants: ['Tandoor', 'Jojo Ramen'],
    nearbyDestinations: ['Espaço Olavo Setúbal', 'Itaú Cultural', 'Mirante Sesc Paulista'],
    image: require('../assets/casaRosas.jpg'),
  },
  {
    title: 'Pinacoteca do Estado de São Paulo',
    petsAllowed: true,
    closingTime: '18:00',
    restaurants: ['Effendi', 'Lótus Restaurantes Vegetariano'],
    nearbyDestinations: ['Museu da Língua Portuguesa', 'Igreja de São Cristóvão'],
    image: require('../assets/pinacotecaSP.jpg'),
  },
  {
    title: 'Itaú Cultural',
    petsAllowed: false,
    closingTime: '20:00',
    restaurants: ['Osteria Generale', 'Jojo Ramen'],
    nearbyDestinations: ['Teatro Sesc- Avenida Paulista', 'Museu Herculano Pires'],
    image: require('../assets/museuItau.jpg'),
  },
  {
    title: 'Museu de Belas Artes de São Paulo',
    petsAllowed: false,
    closingTime: '18:00',
    restaurants: ['Fuego Celeste Parrillada', 'Dr. Tchê La Parrilla de La Villa'],
    nearbyDestinations: ['Templo Tzong Kwan', 'Parque Ibirapuera'],
    image: require('../assets/MuseuBelas.jpg'),
  },
  {
    title: 'Paço das Artes',
    petsAllowed: false,
    closingTime: 'Não possui horário',
    restaurants: ['Pipo Restaurante', 'Barbacoa'],
    nearbyDestinations: ['Jardins', 'Museu da imagem e do som'],
    image: require('../assets/pacoArtes.jpg'),
  },
  {
    title: 'Museu da Diversidade Sexual',
    petsAllowed: false,
    closingTime: 'Não possui horário',
    restaurants: ['Solar da República', 'A casa do Porco'],
    nearbyDestinations: ['Índio Caçador', 'Edifício Itália'],
    image: require('../assets/museuDiver.jpg'),
  },
  {
    title: 'Museu da Língua Portuguesa',
    petsAllowed: true,
    closingTime: '18:00',
    restaurants: ['Effendi', 'Lótus Restaurante vegetariano'],
    nearbyDestinations: ['Pinacoteca do Estado de São Paulo', 'Jardim da Luz'],
    image: require('../assets/museuPort.jpg'),
  },
];

const CentrosCulturais = () => {
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

export default CentrosCulturais;