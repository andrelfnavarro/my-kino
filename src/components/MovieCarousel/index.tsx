import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

import { IMovie } from '../../interfaces/IMovie';
import api from '../../services/api';

import { Container, Genre, Movie, MovieImage } from './styles';

interface PopularMovies {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

interface Genre {
  id: number;
  name: string;
}

interface MovieCarouselProps {
  genre: Genre;
}

export const MovieCarousel: React.FC<MovieCarouselProps> = ({ genre }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { navigate } = useNavigation();

  useEffect(() => {
    const getPopularMovies = async () => {
      const { data } = await api.get<PopularMovies>('/discover/movie', {
        params: {
          with_genres: String(genre.id),
          with_watch_monetization_types: 'flatrate',
          sort_by: 'popularity.desc',
          include_adult: false,
          include_video: false,
        },
      });

      const moviesWithImages = data.results.map(movie => {
        return {
          ...movie,
          poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        };
      });

      setMovies(moviesWithImages);
    };

    getPopularMovies();
  }, []);

  return (
    <Container>
      <Genre>{genre.name}</Genre>
      <FlatList
        data={movies}
        keyExtractor={item => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <Movie onPress={() => navigate('MovieDetails', { movie: item })}>
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
