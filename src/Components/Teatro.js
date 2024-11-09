import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import { Ionicons } from '@expo/vector-icons'; // Importar Ionicons

const teaDetails = [
  {
    title: 'Teatro Renault',
    petsAllowed: false,
    closingTime: '23:30',
    restaurants: ['Sushi Isao', 'Tanka Restaurante'],
    nearbyDestinations: ['Muro dos Arcos da Avenida 23 de Maio', 'Andarilian Expedições'],
    image: require('../assets/teatro-renault.jpg'),
  },
  {
    title: 'Theatro Municipal De São Paulo',
    petsAllowed: false,
    closingTime: '17:00',
    restaurants: ['Bar da Dona Onca', 'Almanara'],
    nearbyDestinations: ['Museu do Teatro Municipal de São Paulo', 'Galeria do Rock'],
    image: require('../assets/theatro-municipal.jpg'),
  },
  {
    title: 'Teatro Bradesco',
    petsAllowed: false,
    closingTime: '20:00',
    restaurants: ['Petí Gastronomia', 'SA Cozinha Japonesa Contemporânea'],
    nearbyDestinations: ['SESC Pompéia', 'Allianz Parque'],
    image: require('../assets/teatro-bradesco.jpg'),
  },
  {
    title: 'Teatro Santander',
    petsAllowed: false,
    closingTime: '18:00',
    restaurants: ['Varanda JK Iguatemi', 'Bacio di Latte - Shopping JK Iguatemi'],
    nearbyDestinations: ['Shopping JK Iguatemi', 'Shopping Ferry Boat'],
    image: require('../assets/teatro-santander.jpg'),
  },
  {
    title: 'Teatro Porto',
    petsAllowed: false,
    closingTime: '21:00',
    restaurants: ['AMAZO - Cozinha Peruana', 'Acrópoles'],
    nearbyDestinations: ['SESC Bom Retiro', 'Museu da Energia de São Paulo'],
    image: require('../assets/teatro-porto.jpg'),
  },
  {
    title: 'SESC Pompéia',
    petsAllowed: false,
    closingTime: '22:00',
    restaurants: ['Arimbá Restaurante', 'Petí Gastronomia'],
    nearbyDestinations: ['Centro Histórico de Bananal', 'Teatro Bradesco'],
    image: require('../assets/sesc-pompeia.jpg'),
  },
  {
    title: 'SESC Itaquera',
    petsAllowed: false,
    closingTime: '17:00',
    restaurants: ['Sushi DoCarmo', 'Bar Santo Antonio'],
    nearbyDestinations: ['Parque do Carmo', 'Planetário do Carmo'],
    image: require('../assets/sesc-itaquera.jpg'),
  },
  {
    title: 'Teatro Unimed',
    petsAllowed: false,
    closingTime: '22:00',
    restaurants: ['Restaurante Bacalhau, Vinho e Cia', 'A Baianeira'],
    nearbyDestinations: ['Parque Da Água Branca', 'Memorial da América Latina'],
    image: require('../assets/teatro-unimed.jpg'),
  },
  {
    title: 'Teatro Sérgio Cardoso',
    petsAllowed: false,
    closingTime: '18:00',
    restaurants: ['Templo Da Carne Marcos Bassi', 'Jamile Restaurante'],
    nearbyDestinations: ['Paróquia Nossa Senhora Achiropita', 'Teatro Ópera'],
    image: require('../assets/teatro-sergio.jpg'),
  },
  {
    title: 'Teatro Liberdade',
    petsAllowed: false,
    closingTime: '19:00',
    restaurants: ['Yakissoba Mundial', 'Restaurante Nandemoyá'],
    nearbyDestinations: ['Museu Histórico da Imigração Japonesa', 'Grande Auditório e Hall do Bunkyo'],
    image: require('../assets/teatro-liberdade.jpg'),
  },
];

const Teatro = () => {
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
        {teaDetails.map((tea, index) => (
          <View key={index} style={styles.card}>
            <Image source={tea.image} style={styles.image} />
            <Text style={styles.cardTitle}>{tea.title}</Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Icon name={tea.petsAllowed ? 'paw' : 'ban'} size={20} color={tea.petsAllowed ? '#4CAF50' : '#e74c3c'} />
                <Text style={styles.infoText}>
                  Pets: {tea.petsAllowed ? 'Permitido' : 'Não permitido'}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Icon name="clock-o" size={20} color="#666" />
                <Text style={styles.infoText}>Fecha às: {tea.closingTime}</Text>
              </View>
            </View>
            <Text style={styles.subTitle}>Restaurantes Próximos:</Text>
            {tea.restaurants.map((restaurant, idx) => (
              <Text key={idx} style={styles.listItem}>{restaurant}</Text>
            ))}
            <Text style={styles.subTitle}>Destinos Próximos:</Text>
            {tea.nearbyDestinations.map((destination, idx) => (
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

export default Teatro;