import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AltoRibeira = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/alto.jpg')}
        style={styles.headerImage}
      />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Parque Estadual Turístico do Alto Ribeira</Text>
        <Text style={styles.subtitle}>Zona Rural, Iporanga SP</Text>
        <Text style={styles.price}>R$ 50</Text>
        
        <Text style={styles.sectionTitle}>Mais Informações</Text>
        <Text style={styles.description}>
            O Parque Estadual Turístico do Alto Ribeira (PETAR), criado em 1958, aparece como um dos mais antigos do Estado de São Paulo. Possui mais de 35 mil hectares e abrange os municípios de Iporanga e Apiaí. O Parque tem sua área coberta pela densa e exuberante vegetação da Mata Atlântica e integra a Zona Núcleo da Reserva da Biosfera. 
        </Text>
        
        <Text style={styles.sectionTitle}>Restaurantes com produtores locais</Text>
        <View style={styles.restaurantItem}>
          <Image
            source={require('../assets/Restaurante Abilio.jpg')} 
            style={styles.restaurantImage}
          />
          <View style={styles.restaurantInfo}>
            <Text style={styles.restaurantName}>Restaurante do Abílio</Text>
            <Text style={styles.restaurantDescription}>Pratos tradicionais</Text>
            <Text style={styles.restaurantPrice}>R$ 40</Text>
          </View>
        </View>
        
        <View style={styles.restaurantItem}>
          <Image
            source={require('../assets/Bispo.jpg')}
            style={styles.restaurantImage}
          />
          <View style={styles.restaurantInfo}>
            <Text style={styles.restaurantName}>Bistrô Casa da Mata</Text>
            <Text style={styles.restaurantDescription}>pratos sofisticados e sabores regionais</Text>
            <Text style={styles.restaurantPrice}>R$ 50</Text>
          </View>
        </View>
        
        <Text style={styles.sectionTitle}>Principais atrações</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.attractionsContainer}>
          <Image
            source={require('../assets/CavernaMorro.jpg')} 
            style={styles.attractionImage}
          />
          <Image
            source={require('../assets/QuilomboParque.jpg')}
            style={styles.attractionImage}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
  restaurantItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  restaurantInfo: {
    marginLeft: 10,
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  restaurantDescription: {
    fontSize: 14,
    color: '#666',
  },
  restaurantPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  attractionsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  attractionImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default AltoRibeira;