import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MovieDetails, MovieDetailsRouteParams } from '../screens/MovieDetails';

import { Home } from '../screens/Home';
import { MyList } from '../screens/MyList';

export type AppStackParamList = {
  Home: undefined;
  MovieDetails: MovieDetailsRouteParams;
  MyList: undefined;
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
        <Screen name="MyList" component={MyList} />
      </Navigator>
    </NavigationContainer>
  );
}
