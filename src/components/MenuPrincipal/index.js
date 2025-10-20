import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Menu Principal</Text>

      <View style={styles.grupoCard}>
        <View style={styles.cards}>
          <Image
            style={styles.imgTitCard}
            source={require('../../assets/logo_burger.png')}
          />
          <Text style={styles.txtTitCard}>Lanches</Text>
        </View>

        <View style={styles.cards}>
          <Image
            style={styles.imgTitCard}
            source={require('../../assets/bebidas.png')}
          />
          <Text style={styles.txtTitCard}>Bebidas</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D2E',
  },

  titulo: {
    fontSize: 24,
    color: '#fff',
    alignSelf: 'center',
    margin: 20,
  },

  cards: {
    margin: 10,
    height: 230,
    backgroundColor: '#FFA500',
    width: 200,
    borderRadius: 6,
    padding: 5,
    alignItems: 'center',
  },

  grupoCard: {
    flexDirection: 'row'
  },

  imgTitCard: {
    width: 180,
    height: 180,
  },
  txtTitCard: {
    fontWeight: 'bold',
    fontSize: 21,
    color: '#4a0358ff',
  },
});
