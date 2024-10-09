import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Aquario = () => {
  const scrollViewRef = useRef();

  const scrollToOptions = () => {
    scrollViewRef.current.scrollTo({ y: 500, animated: true });
  };

  const options = [
    {
      title: "Recinto dos Ursos Polares",
      price: "Pago apenas o ingresso de R$90,00 do Aquário",
      image: require('../assets/RecintoUrsos.jpeg'),
      rating: 1000,
    },
    {
      title: "O Mergulho das Sereias",
      price: "Verificar disponibilidade",
      image: require('../assets/MergulhoSereias.jpg'), 
      rating: 250,
    },
    {
      title: "Tanque dos Tubarões",
      price: "Gratuito",
      image: require('../assets/TanqueTubarao.jpeg'), 
      rating: 345,
    },
    {
      title: "Setor Africa",
      price: "Gratuito",
      image: require('../assets/SetorAfrica.jpeg'), 
      rating: 256,
    },
  ];

  return (
    <ScrollView ref={scrollViewRef} style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/Aquario.jpg')} 
          style={styles.headerImage} 
        />
        <Text style={styles.title}>Aquario - São Paulo</Text>
        <Text style={styles.info}>Aberto agora: 5:00 - 0:00</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>Informações</Text>
        <View style={styles.infoRow}>
          <Icon name="clock-o" size={20} color="#4CAF50" />
          <Text style={styles.infoText}>Duração: 1 hora ou mais</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="paw" size={20} color="#4CAF50" />
          <Text style={styles.infoText}>Todos os animais são liberados de visitar o parque</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={scrollToOptions}>
        <Text style={styles.buttonText}>Veja as opções</Text>
      </TouchableOpacity>

      <View style={styles.spacing} />

      <Text style={styles.sectionTitle}>Principais maneiras de aproveitar o Aquário</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.optionItem}>
            <Image source={option.image} style={styles.optionImage} />
            <View style={styles.optionDetails}>
              <Text style={styles.optionTitle}>{option.title}</Text>
              <Text style={styles.optionPrice}>{option.price}</Text>
              <Text style={styles.optionRating}>{option.rating} avaliações</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  info: {
    fontSize: 16,
    color: '#666',
  },
  infoContainer: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  optionsContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  optionItem: {
    width: 250,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  optionImage: {
    width: '100%',
    height: 150,
  },
  optionDetails: {
    padding: 10,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionPrice: {
    fontSize: 14,
    color: '#4CAF50',
  },
  optionRating: {
    fontSize: 12,
    color: '#666',
  },
  spacing: {
    height: 20,
  },
  button: {
    backgroundColor: '#266951', // Cor do botão
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Aquario;