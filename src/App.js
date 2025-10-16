import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import Splash from "./components/Splash";
import Login from "./components/Login";
import CadastrarUsuarios from "./components/CadastrarUsuarios";
import EsqueceuSenha from "./components/EsqueceuSenha";
import ValidarEmail from "./components/ValidarEmail";
import MenuPrincipal from "./components/MenuPrincipal";
import Lanches from "./components/Lanches";

export default props => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Login/> */}
            {/* <CadastrarUsuarios /> */}
            {/* <EsqueceuSenha /> */}
            {/* <ValidarEmail /> */}
            {/* <MenuPrincipal /> */}
            <Lanches />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})