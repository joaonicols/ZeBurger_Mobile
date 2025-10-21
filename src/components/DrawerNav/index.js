import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";


import Login from "../Login";
import ValidarEmail from "../ValidarEmail"
import CadastrarUsuarios from "../CadastrarUsuarios";
import Icon from 'react-native-vector-icons/FontAwesome';



const Drawer = createDrawerNavigator();

export default props => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={Login}
            options={{
                title: "Login",
                drawerLabel: "Login",
                drawerIcon: () => (
                    <Icon name={"user-circle-o"}
                    size={24}
                    color={"#000000ff"} />
                )
            }} />
            <Drawer.Screen name="Validar Email" component={ValidarEmail} 
            options={{
                title: "Validar E-mail",
                drawerLabel: "Validar E-mail",
                drawerIcon: () => (
                    <Icon name={"check"}
                    size={24}
                    color={"#000000ff"} />
                )
            }}
            />
            <Drawer.Screen name="Cadastrar Usuários" component={CadastrarUsuarios}
            options={{
                title: "Cadastrar Usuários",
                drawerLabel: "Cadastrar Usuários",
                drawerIcon: () => (
                    <Icon name={"user-plus"}
                    size={24}
                    color={"#000000ff"} />
                )
            }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})