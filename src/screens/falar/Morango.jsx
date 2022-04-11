import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native'


import * as Speech from 'expo-speech'
import { Ionicons, FontAwesome } from '@expo/vector-icons'


function FalaMorango() {

    const [falando, setFalando] = useState(false)

    function falar() {
        let frase = 'Morango'
        Speech.speak(frase, {
            language: 'pt-BR',
            onStart: iniciaFala,
            onDone: finalizaFala
        })
    }
    function parar() {
        Speech.stop()
    }
    const iniciaFala = () => {
        setFalando(true)
    }
    const finalizaFala = () => {
        setFalando(false)
    }

    return (
        <View style={styles.Principal}>
            <Text style={styles.Titulo}>
                Morango
                <FontAwesome name="comment-o" size={50} />
                </Text>
            {falando && <ActivityIndicator size="large" color="#1A237E" />}
            <View style={styles.Botoes}>
                <FontAwesome.Button
                    name="volume-up"
                    backgroundColor="#0275d8"
                    onPress={falar}
                    style={styles.Botao}>Ouvir a Frase
                </FontAwesome.Button>
                <FontAwesome.Button
                    name="stop-circle"
                    backgroundColor={!falando ? "#CCCCCC" : "#d9534f"}
                    onPress={parar}
                    disabled={!falando}
                    style={styles.Botao}>Parar
                </FontAwesome.Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Principal: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    Titulo: {
        color: '#1A237E',
        fontSize: 30
    },
    Foto: {
        height: 400,
        width: '100%',
        resizeMode: 'center'
    },
    Botao: {
        width: 150,
        height: 30
    },
    Botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
export default FalaMorango