import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import { Ionicons } from '@expo/vector-icons'; // Importar Ionicons

const musDetails = [
  {
    title: 'Pinacoteca do Estado de São Paulo',
    petsAllowed: false,
    closingTime: '18:00',
    restaurants: ['Effendi', 'Lótus Restaurante Vegetariano', 'Prato Grego'],
    nearbyDestinations: ['Museu da Língua Portuguesa', 'Igreja de São Cristovão'],
    image: require('../assets/museu-catavento.jpg'),
  },
  {
    title: 'Museu Catavento',
    petsAllowed: false,
    closingTime: '16:00',
    restaurants: ['Bar do Mané', 'Mortadela Brasil'],
    nearbyDestinations: ['Faculdade de direito da USP', 'Mercado Municipal de São Paulo'],
    image: require('../assets/cine-joia.jpg'),
  },
  {
    title: 'MASP - Museu de Arte de São Paulo',
    petsAllowed: false,
    closingTime: '18:00',
    restaurants: ['Noah Gastronomia Paulista', 'Camarada Camarão - Shopping Cidade São Paulo'],
    nearbyDestinations: ['Avenida Paulista', 'Parque Tenente Siquira Campos (Trianon)'],
    image: require('../assets/masp.jpg'),
  },
  {
    title: 'Centro Cultural Banco do Brasil',
    petsAllowed: false,
    closingTime: '20:00',
    restaurants: ['Salve Jorge', 'Raful'],
    nearbyDestinations: ['Exposição Índia', 'Farol Santander'],
    image: require('../assets/ccbb.jpg'),
  },
  {
    title: 'Museu da Língua Portuguesa',
    petsAllowed: false,
    closingTime: '18:00',
    restaurants: ['Effendi', 'Lótus Restaurante Vegetariano'],
    nearbyDestinations: ['Pinacoteca do Estado de São Paulo', 'Jardim da Luz'],
    image: require('../assets/museu-linguaportuguesa.jpg'),
  },
  {
    title: 'Museu do Futebol',
    petsAllowed: false,
    closingTime: '17:00',
    restaurants: ['Carlota', 'Assado Porteño'],
    nearbyDestinations: ['Estádio do Pacaembu', 'Museu de Arte Brasileira'],
    image: require('../assets/museu-futebol.jpg'),
  },
  {
    title: 'Instituto Tomie Ohtake',
    petsAllowed: false,
    closingTime: '19:00',
    restaurants: ['Di Paolo - Pinheiros', 'Sai Gon'],
    nearbyDestinations: ['Paróquia Anglicana de São João', 'Avenida Club Teatro'],
    image: require('../assets/instituto-tomie-ohtake.jpg'),
  },
  {
    title: 'Itaú Cultural',
    petsAllowed: false,
    closingTime: '20:00',
    restaurants: ['Coco Bambu Conceito Pátio Paulista', 'Osteria Generale'],
    nearbyDestinations: ['Universidad del Papel', 'Teatro SESC - Avenida Paulista'],
    image: require('../assets/itau-cultural.jpg'),
  },
  {
    title: 'Mis - Museu Da Imagem E Do Som',
    petsAllowed: false,
    closingTime: '20:00',
    restaurants: ['Pipo Restaurante', 'Caluma'],
    nearbyDestinations: ['Paço das Artes', 'Museu Brasileiro da Escultura e Ecologia'],
    image: require('../assets/mis.jpg'),
  },
  {
    title: 'Museu do Ipiranga',
    petsAllowed: false,
    closingTime: '17:00',
    restaurants: ['Paellas Pepe', 'Nico Pasta & Basta'],
    nearbyDestinations: ['Museu Paulista da Universidade de São Paulo', 'Museu Paulista'],
    image: require('../assets/museu-ipiranga.jpg'),
  },
];

const Museu = () => {
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

        {musDetails.map((mus, index) => (
          <View key={index} style={styles.card}>
            <Image source={mus.image} style={styles.image} />
            <Text style={styles.cardTitle}>{mus.title}</Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Icon name={mus.petsAllowed ? 'paw' : 'ban'} size={20} color={mus.petsAllowed ? '#4CAF50' : '#e74c3c'} />
                <Text style={styles.infoText}>
                  Pets: {mus.petsAllowed ? 'Permitido' : 'Não permitido'}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Icon name="clock-o" size={20} color="#666" />
                <Text style={styles.infoText}>Fecha às: {mus.closingTime}</Text>
              </View>
            </View>
            <Text style={styles.subTitle}>Restaurantes Próximos:</Text>
            {mus.restaurants.map((restaurant, idx) => (
              <Text key={idx} style={styles.listItem}>{restaurant}</Text>
            ))}
            <Text style={styles.subTitle}>Destinos Próximos:</Text>
            {mus.nearbyDestinations.map((destination, idx) => (
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

export default Museu;