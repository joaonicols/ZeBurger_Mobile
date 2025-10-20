import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Login from "../Login"
import CadastrarUsuarios from "../CadastrarUsuarios"
import MenuPrincipal from "../MenuPrincipal";

const Tab = createMaterialTopTabNavigator();

export default props => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="MenuPrincipal" component={MenuPrincipal} />
            <Tab.Screen name="CadastrarUsuarios" component={CadastrarUsuarios} />
        </Tab.Navigator>
    )
}