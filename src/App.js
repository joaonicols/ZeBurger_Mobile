import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import DrawerNav from './components/DrawerNav';
// import TabBarNav from './components/TabBarNav';
// import CodigoSenha from './components/CodigoSenha';
// import Splash from "./components/Splash";
// import Login from "./components/Login";
// import CadastrarUsuarios from "./components/CadastrarUsuarios";
// import EsqueceuSenha from "./components/EsqueceuSenha";
// import ValidarEmail from "./components/ValidarEmail";
// import MenuPrincipal from "./components/MenuPrincipal";
// import Lanches from "./components/Lanches";
// import BottomNav from './components/BottomNav';
// import Bebidas from './components/Bebidas';



const Stack = createNativeStackNavigator();

export default props => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <Login/> */}
        {/* <CadastrarUsuarios /> */}
        {/* <EsqueceuSenha /> */}
        {/* <ValidarEmail /> */}
        {/* <MenuPrincipal /> */}
        {/* <Lanches /> */}
        {/* <BottomNav /> */}
        {/* <Bebidas /> */}
        {/* <CodigoSenha /> */}
        {/* <TabBarNav />  */}
        <DrawerNav />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
