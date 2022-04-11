import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
//import Wave from "../../assets/Wave";

function Tela() {
  const [appAtivo, setAppAtivo] = useState(false)

  useEffect(() => {

    // codigo da splash screen
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience.
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppAtivo(true);
      }
    }
    //fim codigo da splash screen
    prepare();
  }, [])

  // codigo da splash screen 
  const onLayoutRootView = useCallback(async () => {
    if (appAtivo) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
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