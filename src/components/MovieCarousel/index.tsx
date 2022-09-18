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

      // We could use the 'original' instead of the w500 poster quality
      // if we wanted to
      // For that, we would need to implement a prefetch strategy
      // to download the images in the background while the user
      // sees some sort of loader/shimmer effect
      const moviesWithImages = data.results.map(movie => {
        return {
          ...movie,
          poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
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
