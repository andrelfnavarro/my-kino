import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MovieDetails, MovieDetailsRouteParams } from '../screens/MovieDetails';

import { Home } from '../screens/Home';

export type AppStackParamList = {
  Home: undefined;
  MovieDetails: MovieDetailsRouteParams;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}

const { Navigator, Screen } = createStackNavigator<AppStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="MovieDetails" component={MovieDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
