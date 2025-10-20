import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerRed}>
        <Text style={styles.txtFonteA}>Insira o código enviado no seu E-mail:</Text>
        <View style={styles.containerX}>
          <TextInput style={styles.placeH} placeholder="X" />
          <TextInput style={styles.placeH} placeholder="X" />
          <TextInput style={styles.placeH} placeholder="X" />
          <TextInput style={styles.placeH} placeholder="X" />
          <TextInput style={styles.placeH} placeholder="X" />
          <TextInput style={styles.placeH} placeholder="X" />
        </View>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.txtFonteB}>Confirmar</Text>
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
  containerRed: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    height: 250,
    width: 400,
    borderWidth: 0.2,
    borderColor: 'black',
    borderRadius: 10,
  },
  containerX: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  txtFonteB: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat-Regular',
    color: 'white',
  },
  txtFonteA: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat-Regular',
    color: 'black',
    marginBottom: 10,
  },

  botao: {
    backgroundColor: '#0787ffff',
    height: 50,
    width: 240,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: 'black',
    justifyContent: 'center',
    marginTop: 10,
  },
  placeH: {
    backgroundColor: 'lightblue',
    borderBottomWidth: 1,
    borderColor: 'black',
    height: 40,
    width: 50,
    borderRadius: 5,
    fontSize: 16,
    margin: 6,
    textAlign: 'center',
  },
});
