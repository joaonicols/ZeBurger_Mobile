import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgLogo}
        source={require('../../assets/logo_burger.png')}
      />
      <Text style={styles.txtTitulo}>Zé Burger</Text>

      <View style={styles.boxInput}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail:"
          maxLength={100}
          placeholderTextColor="#fff"
        />

        <TextInput
          style={styles.input}
          placeholder="Insira sua senha:"
          maxLength={12}
          secureTextEntry={true}
          placeholderTextColor="#fff"
        />

        <TouchableOpacity>
          <Text style={styles.linkEsqueceu}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.txtButton}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.linkCadastro}>
            Não tem uma conta? <Text style={styles.negrito}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D1D2E',
  },

  imgLogo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 18,
  },

  txtTitulo: {
    fontSize: 35,
    color: '#fff',
    fontFamily: 'Roboto_Condensed-Regular',
  },

  boxInput: {
    paddingVertical: 34,
    paddingHorizontal: 14,
  },

  input: {
    width: 300,
    height: 50,
    color: '#fff',
    backgroundColor: '#101026',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
  },

  button: {
    width: 300,
    height: 40,
    backgroundColor: '#3fffa3',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  txtButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '101026',
  },

  linkEsqueceu: {
    textAlign: 'right',
    color: '#007bff',
    marginBottom: 10,
  },

  linkCadastro: {
    marginTop: 20,
    textAlign: 'center',
    color: 'red',
  },
  negrito: {
    fontWeight: 'bold',
    color: '#007bff',
  },
});
