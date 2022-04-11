import React, { useCallback, useState, useEffect } from 'react'
import 'react-native-gesture-handler'
import { Platform } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'


// importe das Screens
import InicioScreen from './../screens/Inicio'

//importe de componente
import Paginas from './../components/Paginas'

const Drawer = createDrawerNavigator()

function Menu() {

    const [iconePadrao, setIconePadrao] = useState('md')

    useEffect(() => {

        //Dependendo do SO, mostraremos ícones diferentes
        switch (Platform.OS) {
            case 'ios':
                setIconePadrao('ios')
                break
            case 'android':
                setIconePadrao('md')
                break
        }
    }, [])

    return (

        <Drawer.Navigator
            initialRouteName='Início'
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#FFF',
                    width: 280
                }
            }}>
            <Drawer.Screen name="Início"
                component={InicioScreen}
                options={{
                    drawerIcon: ({ focused }) => (
                        <Ionicons name={`${iconePadrao}-home`}
                            size={32}
                            color={focused ? '#7CC' : '#CCC'} />)
                }}
            />
            <Drawer.Screen name="Falar"
                component={Paginas}
                options={{
                    drawerIcon: ({ focused }) => (
                        <Ionicons name={`${iconePadrao}-happy`}
                            size={32}
                            color={focused ? '#7CC' : '#CCC'} />)
                }}
            />
        </Drawer.Navigator>
    )
}
export default Menu