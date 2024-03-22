import React from "react";
import { useCallback } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { fonts } from '../css/fonts';

SplashScreen.preventAutoHideAsync();

function WithFonts(Component) {
  return function FontRenderer(props) {
    const [fontsLoaded] = useFonts(fonts);

    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
      return null;
    }

    return (
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <Component />
      </View>
    );
  };
}

export default WithFonts;
