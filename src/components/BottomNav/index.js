import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native"
import MenuPrincipal from "../MenuPrincipal/index"
import Login from "../Login/index"
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator()


export default props => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="MenuPrincipal" component={MenuPrincipal} options={{
                title: "Menu Principal", tabBarIcon: () => (
                    <Icon size={24} name="plus" />
                )
            }} />
            <Tab.Screen name="Login" component={Login} options={{
                title: "Login", tabBarIcon: () => (
                    <Icon size={24} name="plus" />
                )
            }} />
        </Tab.Navigator>
    )
}