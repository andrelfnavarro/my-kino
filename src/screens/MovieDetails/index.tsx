import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';

import { AgeRating } from '../../types/AgeRating';
import { IMovie } from '../../interfaces/IMovie';
import { Button } from '../../components/Button';
import { ScreenTopBar } from '../../components/ScreenTopBar';
import { Rating } from '../../components/Rating';

import api from '../../services/api';
import { useMyList } from '../../hooks/useMyList';

import {
  Age,
  AgeRestriction,
  Container,
  Title,
  Info,
  Poster,
  Runtime,
  ReleaseYear,
  Description,
  Footer,
} from './styles';

export interface MovieDetailsRouteParams {
  movie: IMovie;
}

const minutesToHours = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}h ${remainingMinutes}m`;
};

export const MovieDetails: React.FC = () => {
  const route = useRoute();
  const { movie } = route.params as MovieDetailsRouteParams;
  const theme = useTheme();
  const { addToMyList, removeFromMyList, alreadyInMyList } = useMyList();

  const [ageRating, setAgeRating] = useState<AgeRating>('' as AgeRating);
  const [runtime, setRuntime] = useState('');

  useEffect(() => {
    const getMovieAgeRestriction = async () => {
      const { data } = await api.get(`/movie/${movie.id}`, {
        params: {
          append_to_response: 'release_dates',
        },
      });

      const age = data.release_dates.results.find(r => r.iso_3166_1 === 'US')
        .release_dates[0].certification;

      setAgeRating(age);
      setRuntime(minutesToHours(data.runtime));
    };

    getMovieAgeRestriction();
  }, []);

  const handleButtonClicked = () => {
    if (alreadyInMyList(movie)) {
      removeFromMyList(movie);
    } else {
      addToMyList(movie);
    }
  };

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={theme.colors.background_primary}
      />

      <ScreenTopBar title="Details" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        bounces
      >
        <Poster resizeMode="cover" source={{ uri: movie.poster_path }} />

        <Title>{movie.title}</Title>
        <Info>
          <ReleaseYear>
            {new Date(movie.release_date).getFullYear()}
          </ReleaseYear>

          {ageRating && (
            <AgeRestriction ageRating={ageRating}>
              <Age>{ageRating}</Age>
            </AgeRestriction>
          )}

          <Runtime>{runtime}</Runtime>

          <Rating rating={movie.vote_average} />
        </Info>

        {movie.overview.split('. ').map((paragraph, index, arr) => (
          <Description key={index}>
            {paragraph}
            {index === arr.length - 1 ? '' : '.'}
          </Description>
        ))}
      </ScrollView>

      <Footer>
        <Button
          title={
            alreadyInMyList(movie) ? 'Remove from My List' : 'Add to My List'
          }
          onPress={handleButtonClicked}
        />
      </Footer>
    </Container>
  );
};
