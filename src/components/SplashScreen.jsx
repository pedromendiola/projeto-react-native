import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

//import { MotiImage } from 'moti';

function Tela() {
  const [appAtivo, setAppAtivo] = useState(false)

  useEffect(() => {

    // codigo da splash screen
    async function prepare() {
      try {
        // Mantem a tela splash screen enquanto busca recurso
        await SplashScreen.preventAutoHideAsync();
        // Pre-carrega fontes, local para chamada de APIs
        await Font.loadAsync(Entypo.font);
        // Delay artificial para simular carregamento
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Diz para o aplicativo renderizar
        setAppAtivo(true);
      }
    }
    //fim codigo da splash screen
    prepare();
  }, [])

  // codigo da splash screen 
  const onLayoutRootView = useCallback(async () => {
    if (appAtivo) {
      // Diz para a splash screen sumir quando o conteudo da tela principal do app estiver totalmente carregado
      await SplashScreen.hideAsync();
    }
  }, [appAtivo]);

  if (!appAtivo) {
    return null;
  }
  //fim codigo da splash screen

  return (
    <View
      onLayout={onLayoutRootView}>
    </View>
  );

}
export default Tela;