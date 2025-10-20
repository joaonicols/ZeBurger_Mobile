import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const DATA = [
    {
        id: '1',
        title: 'Guaraná Antartica',
    },
    {
        id: '2',
        title: 'Coca-Cola',
    },
    {
        id: '3',
        title: 'Pepsi',
    },
    {
        id: '4',
        title: 'Schwepps',
    },
    {
        id: '5',
        title: 'Guaraviton',
    },
    {
        id: '6',
        title: 'Fanta',
    },
    {
        id: '7',
        title: 'Sprite',
    },
    {
        id: '8',
        title: 'Dolly',
    },
    {
        id: '9',
        title: 'Guaraná Kuat',
    },
    {
        id: '10',
        title: 'Guaraná Jesus',
    },
]

const LancheRender = ({ title }) => (
    <View style={styles.item}>
        <Image 
        source={require("../../assets/bebidas.png")}
        style={styles.img} />
        <View>
            <Text style={styles.texto}>{title}</Text>
            <Text style={styles.subTexto}>Guaraná Antartica, o sabor brasileiro,</Text>
            <Text style={styles.subTextoK}>200 Kcal - 150g</Text>
        </View>
    </View>
)

export default () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Bebidas</Text>
            <View style={styles.grupoView}>
                <FlatList
                data={DATA}
                renderItem={({ item }) => <LancheRender title={item.title} />}
                keyExtractor={item => item.id}
                />
            </View>
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
        margin: 30,
        fontSize: 25,
        color: '#fff200ff',
    },

    grupoView: {
        flex: 1,
    },

    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 6,
    },

    texto: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    img: {
        width: 100,
        height: 100,
    },

    subTexto: {
        margin: 10,
        width: 250,
        textAlign: 'justify',
    },

    subTextoK: {
        margin: 10,
    }

})