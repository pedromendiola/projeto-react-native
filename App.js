import React, { useCallback, useState, useEffect } from 'react'
import 'react-native-gesture-handler' 
import { NavigationContainer, DarkTheme } from '@react-navigation/native'

//importe das Telas
import Menu from './src/components/Menu'
import Tela from './src/components/SplashScreen'

export default function App() {
  return (
    <NavigationContainer >
      <Tela/>
      <Menu/>
    </NavigationContainer>
  )
}
