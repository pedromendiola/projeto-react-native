import React, {useCallback,useState, useEffect} from 'react'
import 'react-native-gesture-handler'
import { Platform } from 'react-native'
import { NavigationContainer } 
       from '@react-navigation/native'
import { createDrawerNavigator } 
       from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

//import Tela from './src/screens/Tela'

import InicioScreen from './src/screens/Inicio'
import ConfiguracoesScreen from './src/screens/Configuracoes'
import GameScreen from './src/screens/Jogo'

const Drawer = createDrawerNavigator()

export default function App(){
  
  const [iconePadrao, setIconePadrao] = useState('md')
  
  useEffect(()=>{
    
    //Dependendo do SO, mostraremos ícones diferentes
    switch(Platform.OS){
      case 'ios':
        setIconePadrao('ios')
        break
      case 'android':
        setIconePadrao('md')
        break
    }
  },[])

  return(
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Início'
        screenOptions={{
          drawerStyle: { backgroundColor: '#FFF',
        width: 280}
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
          <Drawer.Screen name="Configurações" 
          component={ConfiguracoesScreen} 
          options={{
            drawerIcon: ({ focused }) => (            
                <Ionicons name={`${iconePadrao}-cog`}
                 size={32}
                 color={focused ? '#7CC' : '#CCC'} />)
            }}
          /> 
          <Drawer.Screen name="Game" 
          component={GameScreen} 
          options={{
            drawerIcon: ({ focused }) => (            
                <Ionicons name={`${iconePadrao}-game-controller`}
                 size={32}
                 color={focused ? '#7CC' : '#CCC'} />)
            }}
          />         
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
