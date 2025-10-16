import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Bedidas</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1D1D2E',
    },

    titulo: {
        fontSize: 30,
        color: '#fff200ff',
        margin: 30,
    }
})