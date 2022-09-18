import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Header,
  Title,
  MyListIcon,
  MyListButton,
  MyListText,
} from './styles';
import api from '../../services/api';
import { MovieCarousel } from '../../components/MovieCarousel';
import { Loader } from '../../components/Loader';

interface Genre {
  id: number;
  name: string;
}

export const Home = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const theme = useTheme();

  const goToMyList = () => {
    navigation.navigate('MyList');
  };

  useEffect(() => {
    const getGenres = async () => {
      const { data } = await api.get('/genre/movie/list');

      const randomGenres = [];

      while (randomGenres.length < 3) {
        const randomIndex = Math.floor(Math.random() * data.genres.length);
        const randomGenre = data.genres[randomIndex];

        if (!randomGenres.includes(randomGenre)) {
          randomGenres.push(randomGenre);
        }
      }

      setGenres(randomGenres);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    getGenres();
  }, []);

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={theme.colors.background_primary}
      />

      <Header>
        <Title>MyKino</Title>

        <MyListButton onPress={goToMyList}>
          <MyListText>MyList</MyListText>

          <MyListIcon />
        </MyListButton>
      </Header>

      {!loading ? (
        <FlatList
          data={genres}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <MovieCarousel genre={item} />}
        />
      ) : (
        <Loader />
      )}
    </Container>
  );
};
