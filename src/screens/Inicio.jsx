import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

function Inicio() {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center', justifyContent: 'center'
        }}>
            <Text style={styles.Titulo}>Bem-Vindo</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Titulo: {
        color: '#282424',
        fontSize: 45
    }
})
export default Inicio