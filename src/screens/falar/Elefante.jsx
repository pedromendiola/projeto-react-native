import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native'


import * as Speech from 'expo-speech'
import { Ionicons, FontAwesome } from '@expo/vector-icons'


function FalaElefante() {

    const [falando, setFalando] = useState(false)

    function falar() {
        let frase = 'Elefante'
        Speech.speak(frase, {
            language: 'pt-BR',
            onStart: iniciaFala,
            onDone: finalizaFala
        })
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
                Elefante
                </Text>
            {falando && <ActivityIndicator size="large" color="#1A237E" />}
            <View style={styles.Botoes}>
                <FontAwesome.Button
                    name="volume-up"
                    backgroundColor="#0275d8"
                    onPress={falar}
                    style={styles.Botao}>Ouvir
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
        color: '#282424',
        fontSize: 45
    },
    Foto: {
        height: 400,
        width: '50%',
        resizeMode: 'center'
    },
    Botao: {
        width: 150,
        height: 50
        
    },
    Botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    }
})
export default FalaElefante