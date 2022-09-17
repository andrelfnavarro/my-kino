import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Header,
  Title,
  Movie,
  MovieImage,
  MovieInfo,
  MovieTitle,
  WishlistIcon,
} from './styles';
import api from '../../services/api';

interface Genre {
  id: number;
  name: string;
}

export interface PopularMovies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const Home = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);

  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {
    const getPopularMovies = async () => {
      const { data } = await api.get<PopularMovies>('/discover/movie', {
        params: {
          sort_by: 'popularity.desc',
        },
      });

      const moviesWithImages = data.results.map(movie => {
        return {
          ...movie,
          poster_path: `https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path}`,
        };
      });

      setMovies(moviesWithImages);
    };

    // const getGenres = async () => {
    //   const { data } = await api.get('/genre/movie/list');
    //   console.log(data);
    //   setGenres(data.genres);
    // };

    getPopularMovies();
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

        <WishlistIcon />
      </Header>

      <FlatList
        data={movies}
        keyExtractor={item => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator
        renderItem={({ item }) => (
          <Movie
          // onPress={() => navigation.navigate('MovieDetails', { movie: item })}
          >
            <MovieImage
              source={{ uri: item.poster_path }}
              resizeMode="contain"
            />
          </Movie>
        )}
      />
    </Container>
  );
};
