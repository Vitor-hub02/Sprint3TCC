// meu-tour-atualizado-expo/src/Components/DetalhesParque.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const parkDetails = [
        {
          title: 'Ciclovia Rio Pinheiros',
          petsAllowed: false,
          closingTime: '18:30',
          restaurants: ['Master Burguer', 'Max Grill', 'Gelateria Di Rossi'],
          nearbyDestinations: ['Allians Parque', 'Teatro Bradesco', 'Sesc pompeia'],
          image: require('../assets/cicloviaRio.jpg'),
        },
        {
          title: 'Trilha do Pai Zé',
          petsAllowed: false,
          closingTime: '16:00',
          restaurants: ['Sabor Bueno', 'Fratellas', 'Pizzas Vovó Landa'],
          nearbyDestinations: ['Pico do Jaraguá', 'Parque Nascentes do Tieté', 'Parque Estadual do Jaragua'],
          image: require('../assets/trilhaPai.jpg'),
        },
        {
          title: 'Pico Do Jaraguá',
          petsAllowed: false,
          closingTime: '18:00',
          restaurants: ['Fratellas', 'Rei da Pamonha', 'Pizzas Vovó Landa'],
          nearbyDestinations: ['Trilha do Pai Zé', 'Parque Nascentes do Tietê', 'Parque Estadual do Jaragua'],
          image: require('../assets/picoJaragua.jpg'),
        },
        {
          title: 'Trilha da Pedra',
          petsAllowed: true,
          closingTime: '20:00',
          restaurants: ['Nico Pasta & Basta', 'Magic Chicken'],
          nearbyDestinations: ['Museu Paulista', 'Museu do Ipiranga'],
          image: require('../assets/parqueInde.jpg'),
        },
        {
          title: 'Pedra Grande',
          petsAllowed: false,
          closingTime: '18:00',
          restaurants: ['Fazenda Raiz', 'Vila Di Praia', 'Veraci Pizza'],
          nearbyDestinations: ['Parque Edmundo Zanoni', 'Monumento Natural Estadual da Pedra Grande'],
          image: require('../assets/pedraGrande.jpg'),
        },
        {
          title: 'Trilha da Pedra Redonda',
          petsAllowed: false,
          closingTime: 'Não possui horário',
          restaurants: ['Saint Tomas Becket', 'Porvence Cottage'],
          nearbyDestinations: ['Trilha Chapéu do Bispo', 'Pedra Partida','Igreja de São Francisco de Assis'],
          image: require('../assets/pedraRedonda.jpg'),
        },
        {
          title: 'Pedra partida',
          petsAllowed: false,
          closingTime: 'Não possui horário',
          restaurants: ['Quiosque e Restaurante Paulo', 'Café Platô', 'Provence Cottage Bistrô'],
          nearbyDestinations: ['Trilha da Pedra Redonda', 'Trilha Chapéu do Bispo'],
          image: require('../assets/pedraPartida.jpg'),
        },
        {
          title: 'Trilha do Platô',
          petsAllowed: false,
          closingTime: '17:30',
          restaurants: ['Esquilo Gourmet', 'Nápoles Restaurantes e Pizzaria'],
          nearbyDestinations: ['Trilha do Pinheiro Velho', 'Empório da Montanha Beer Shop'],
          image: require('../assets/trilhaPlato.jpg'),
        },
        {
          title: 'Trilha Chapéu do Bispo',
          petsAllowed: false,
          closingTime: '17:30',
          restaurants: ['Café Platô', 'Provence Cottage Bistrô'],
          nearbyDestinations: ['Trilha da Pedra Redonda', 'Pedra Partida'],
          image: require('../assets/trilhaChapeu.jpg'),
        },
        {
          title: 'Trilha do Pinheiro Velho',
          petsAllowed: false,
          closingTime: 'Não possui horário',
          restaurants: ['Esquilo Gourmet', 'Nápoles Restaurantes e Pizzaria'],
          nearbyDestinations: ['Trilha Platô', 'Empório da Montanha Beer Shop'],
          image: require('../assets/trilhaPinheiro.jpg'),
        },
        {
          title: 'Trilha Pedra do Forno',
          petsAllowed: true,
          closingTime: 'Não possui horário',
          restaurants: ['Ao pé da Pedra', 'Restaurante Três irmãs'],
          nearbyDestinations: ['Cachoeira das Setes Quedas', 'Pedra Chanfrada'],
          image: require('../assets/trilhaPedra.jpg'),
        },
        {
          title: 'Trilha Maresias',
          petsAllowed: true,
          closingTime: 'Não possui horário',
          restaurants: ['Restaurante Ravenala', 'Restaurante Terral'],
          nearbyDestinations: ['Praia de Maresias', 'Capela São Benedito e Sant Anna'],
          image: require('../assets/trilhaMaresias.jpg'),
        },
      ];

const Ciclovias = () => {
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

export default Ciclovias;