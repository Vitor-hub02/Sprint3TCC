import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import { Ionicons } from '@expo/vector-icons'; // Importar Ionicons

const cineDetails = [
  {
    title: 'Cinépolis JK Iguatemi Cinema',
    petsAllowed: false,
    closingTime: '22:00',
    restaurants: ['Varanda JK Iguatemi', 'Ráscal', 'Tre JK'],
    nearbyDestinations: ['Roof top 033', 'Shopping JK Iguatemi'],
    image: require('../assets/cinepolis-jk.jpg'),
  },
  {
    title: 'Cine Joia',
    petsAllowed: false,
    closingTime: '18:00',
    restaurants: ['Sushi Isao', 'Tanka Restaurante'],
    nearbyDestinations: ['Praça da Liberdade', 'Matriz Paroquial Pessoal Nipo-Brasileira São Gonçalo'],
    image: require('../assets/cine-joia.jpg'),
  },
  {
    title: 'Cineclube Cortina',
    petsAllowed: false,
    closingTime: '01:00',
    restaurants: ['Bar da Dona Onca', 'A casa do Porco'],
    nearbyDestinations: ['Museu da Diversidade Sexual', 'Edifício Itália'],
    image: require('../assets/cineclube-cortina.jpg'),
  },
  {
    title: 'Cinesala',
    petsAllowed: false,
    closingTime: '23:30',
    restaurants: ['Aguzzo Cucina Italiana', 'Mamusca'],
    nearbyDestinations: ['Instituto Tomie Ohtake', 'Barouche'],
    image: require('../assets/cinesala.png'),
  },
  {
    title: 'Kinoplex Itaim',
    petsAllowed: false,
    closingTime: '?',
    restaurants: ['Restaurante itaIN', 'Bacallhau Vinho e cia'],
    nearbyDestinations: ['Brascan Oopen Mall', 'Parque Ibirapuera'],
    image: require('../assets/kinoplex-itaim.jpg'),
  },
  {
    title: 'Cinema Reserva Cultural',
    petsAllowed: false,
    closingTime: '22:00',
    restaurants: ['Camarada Camarão- Shopping Cidade São Paulo', 'Osteria Generale'],
    nearbyDestinations: ['Teatro Gazeta', 'Museu da Cidade de São Paulo'],
    image: require('../assets/cinema-reserva.jpg'),
  },
  {
    title: 'REAG Belas Artes',
    petsAllowed: false,
    closingTime: 'Horários variados',
    restaurants: ['Living Lounge Bar & Sushi', 'Terraço Jardins'],
    nearbyDestinations: ['Instituto Moreira Salles', 'Igreja São Luis Gonzaga'],
    image: require('../assets/belas-artes.png'),
  },
  {
    title: 'Cinesystem Frei Caneca',
    petsAllowed: false,
    closingTime: '22:00',
    restaurants: ['Kome Culinaria Japonesa', 'Gulab Hari'],
    nearbyDestinations: ['Shopping Frei Caneca', 'Teatro Opus Frei Caneca'],
    image: require('../assets/cinesystem-freicaneca.jpg'),
  },
  {
    title: 'Espaço Augusta de Cinema',
    petsAllowed: false,
    closingTime: '22:00',
    restaurants: ['Kome Culinaria Japonesa', 'Living Lounge Bar & Sushi'],
    nearbyDestinations: ['Universidad del Papel', 'Teatro Crowne Plaza'],
    image: require('../assets/espaco-augusta.jpg'),
  },
  {
    title: 'Cinemateca Brasileira',
    petsAllowed: false,
    closingTime: '18:00',
    restaurants: ['Bráz Quintal', 'Taverna Medieval'],
    nearbyDestinations: ['Museu de Arte Contemporânea', 'Parque Ibirapuera'],
    image: require('../assets/cinemateca-brasileira.jpg'),
  },
];

const Cinemas = () => {
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
        {cineDetails.map((cine, index) => (
          <View key={index} style={styles.card}>
            <Image source={cine.image} style={styles.image} />
            <Text style={styles.cardTitle}>{cine.title}</Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Icon name={cine.petsAllowed ? 'paw' : 'ban'} size={20} color={cine.petsAllowed ? '#4CAF50' : '#e74c3c'} />
                <Text style={styles.infoText}>
                  Pets: {cine.petsAllowed ? 'Permitido' : 'Não permitido'}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Icon name="clock-o" size={20} color="#666" />
                <Text style={styles.infoText}>Fecha às: {cine.closingTime}</Text>
              </View>
            </View>
            <Text style={styles.subTitle}>Restaurantes Próximos:</Text>
            {cine.restaurants.map((restaurant, idx) => (
              <Text key={idx} style={styles.listItem}>{restaurant}</Text>
            ))}
            <Text style={styles.subTitle}>Destinos Próximos:</Text>
            {cine.nearbyDestinations.map((destination, idx) => (
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

export default Cinemas;