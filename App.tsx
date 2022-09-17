import 'react-native-gesture-handler';

import React, { useCallback } from 'react';
import { View } from 'react-native';

import { useFonts } from 'expo-font';
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';

import theme from './src/styles/theme';
import { Routes } from './src/routes';
import { AppProvider } from './src/hooks';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </AppProvider>
    </View>
  );
}
