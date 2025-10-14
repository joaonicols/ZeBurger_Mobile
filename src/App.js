import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import Splash from "./components/Splash";
import Login from "./components/Login";
import CadastrarUsuarios from "./components/CadastrarUsuarios";
import EsqueceuSenha from "./components/EsqueceuSenha";

export default props => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Login/> */}
            {/* <CadastrarUsuarios /> */}
            <EsqueceuSenha />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})