import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const AUTO_CHANGE_INTERVAL = 2000; // 5 segundos para mudar automaticamente

export default function Integracao1({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Integracao3');
    }, AUTO_CHANGE_INTERVAL);

    return () => clearTimeout(timer);
  }, [navigation]);

  const handleNext = () => {
    navigation.navigate('Integracao3');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/integracao2.png')} style={styles.image} />
        <Text style={styles.title}>Desfrute a Jornada, respeite o planeta: viagens sustentáveis, pegadas positivas</Text>
        <Text style={styles.description}>
        Proporcionamos opções de transporte sustentáveis
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.pageIndicator}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '80%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    lineHeight: 24,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  pageIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#4CAF50',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});