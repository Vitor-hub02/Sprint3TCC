import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const categoryImages = {
  'Parques': require('../assets/Parques.jpg'),
  'Museu': require('../assets/exemploMuseu.jpg'),
  'Shopping': require('../assets/exemploShopping.jpeg'),
  'Teatro': require('../assets/exemploTeatro.jpg'),
  'Mercados e feiras locais': require('../assets/mercadolocal.jpeg'),
  'Cinemas': require('../assets/exemploCinema.jpg'),
};

/*Essas imagens precisam ser trocadas SP */
const destinationImages = {
  'Parque Ibirapuera': require('../assets/ParqueIbirapuera.jpg'),
  'Aquário de São Paulo': require('../assets/Aquario.jpg')
};

const experienceImages = {
  'Trilha ecológica': require('../assets/trilha-ecologica.jpeg'),
  'Observação de aves': require('../assets/observacao_de_aves.jpeg'),
  'Turismo rural': require('../assets/Turismo-rural.jpg')
};

const InicialTour = ({ navigation }) => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleDeleteAccount = () => {
    // Implementar a lógica de exclusão de conta aqui
    setIsDeleteModalVisible(false);
    setIsProfileVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#266951', '#2E7D32']} style={styles.header}>
        <Text style={styles.headerTitle}>TourGuide</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Filtros')} style={styles.headerIcon}>
            <Icon name="filter" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsProfileVisible(true)} style={styles.headerIcon}>
            <Icon name="user-circle" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#666" />
          <TextInput 
            style={styles.searchInput}
            placeholder="Explore destinos sustentáveis..."
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.categoriesHeader}>
          <Text style={styles.sectionTitle}>Suas preferências de destinos</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Categorias')}>
          <Text style={styles.seeAllText}>Ver todas</Text>
        </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {Object.keys(categoryImages).map((category, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.categoryItem}
              onPress={() => {
                if (category === 'Parques') {
                  navigation.navigate('Parques'); 
                } else if (category === 'Museu') {
                  navigation.navigate('Museu'); 
                } else if (category === 'Shopping') {
                  navigation.navigate('Shopping'); // Navega para a tela Shopping
                } else if (category === 'Teatro') {
                  navigation.navigate('Teatro'); // Navega para a tela Teatro
                }else if (category === 'Mercados e feiras locais') {
                  navigation.navigate('Mercados'); // Navega para a tela Mercados
                }else if (category === 'Teatro') {
                  navigation.navigate('Teatro'); // Navega para a tela Teatros
                }
                else if (category === 'Museu') {
                  navigation.navigate('Museu'); // Navega para a tela pet
                }
                else if (category === 'Cinemas') {
                  navigation.navigate('Cinemas'); // Navega para a tela pet
                }
                
              }}
            >
              <LinearGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']} style={styles.categoryGradient}>
                <Image source={categoryImages[category]} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{category}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Recomendações de destinos</Text>

        <View style={styles.destinationsContainer}>
          {Object.keys(destinationImages).map((place, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.destinationItem} 
              onPress={() => {
                if (place === 'Parque Ibirapuera') {
                  navigation.navigate('ParqueIbirapuera'); // Navega para ParqueIbirapuera.js
                } else if (place === 'Aquário de São Paulo') {
                  navigation.navigate('Aquario'); // Navega para Aquario.js
                }
              }}
            >
              <Image source={destinationImages[place]} style={styles.destinationImage} />
              <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.destinationGradient}>
                <Text style={styles.destinationTitle}>{place}</Text>
                <Text style={styles.destinationDescription}>Descubra a beleza natural</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Experiências sustentáveis</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.experiencesContainer}>
          {Object.keys(experienceImages).map((experience, index) => (
            <TouchableOpacity key={index} style={styles.experienceItem}>
              <Image source={experienceImages[experience]} style={styles.experienceImage} />
              <View style={styles.experienceTextContainer}>
                <Text style={styles.experienceText}>{experience}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      <View style={styles.footer}>
        {['home', 'map', 'bell', 'user'].map((icon, index) => (
          <TouchableOpacity key={index} style={styles.footerButton}>
            <Icon name={icon} size={24} color={index === 0 ? "#4CAF50" : "#757575"} />
            <Text style={[styles.footerButtonText, index === 0 && styles.activeFooterButtonText]}>
              {icon.charAt(0).toUpperCase() + icon.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tela lateral do perfil */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isProfileVisible}
        onRequestClose={() => setIsProfileVisible(false)}
      >
        <View style={styles.profileContainer}>
          <Text style={styles.profileTitle}>Perfil do Usuário</Text>
          <TextInput
            style={styles.profileInput}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            editable={false}
          />
          <TextInput
            style={styles.profileInput}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.profileInput}
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileButtonText}>Atualizar Dados Cadastrais</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.profileButton, { backgroundColor: '#e74c3c' }]}
            onPress={() => setIsDeleteModalVisible(true)}
          >
            <Text style={styles.profileButtonText}>Excluir Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsProfileVisible(false)}>
            <Text style={styles.closeProfileText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Modal de confirmação de exclusão */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isDeleteModalVisible}
        onRequestClose={() => setIsDeleteModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Deseja realmente excluir sua conta?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#e74c3c' }]}
                onPress={handleDeleteAccount}
              >
                <Text style={styles.modalButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsDeleteModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 20,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 12,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
    color: '#333',
  },
  seeAllText: {
    color: '#266951',
    fontSize: 16,
    fontWeight: '600',
  },
  categoriesContainer: {
    marginBottom: 25,
  },
  categoryItem: {
    marginRight: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  categoryGradient: {
    width: 150,
    height: 100,
    justifyContent: 'flex-end',
    padding: 10,
  },
  categoryImage: {
    ...StyleSheet.absoluteFillObject,
    width: 150,
    height: 100,
    borderRadius: 15,
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  destinationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  destinationItem: {
    width: '48%',
    height: 200,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  destinationImage: {
    width: '100%',
    height: '100%',
  },
  destinationGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '60%',
    justifyContent: 'flex-end',
    padding: 15,
  },
  destinationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  destinationDescription: {
    fontSize: 14,
    color: '#eee',
    marginTop: 5,
  },
  experiencesContainer: {
    marginBottom: 30,
  },
  experienceItem: {
    marginRight: 25,
    width: 250,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  experienceImage: {
    width: 250,
    height: 180,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  experienceTextContainer: {
    padding: 15,
  },
  experienceText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    marginTop: 4,
    fontSize: 12,
    color: '#757575',
  },
  activeFooterButtonText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  profileContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    width: '80%',
    alignSelf: 'flex-end',
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  profileButton: {
    backgroundColor: '#266951',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  profileButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeProfileText: {
    color: '#266951',
    marginTop: 20,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
  },
  modalButton: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default InicialTour;