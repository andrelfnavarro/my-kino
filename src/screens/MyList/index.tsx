import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { parseISO, format } from 'date-fns';

import {
  Chevron,
  ChevronRight,
  Container,
  ListEmptyText,
  Movie,
  MovieAddedAt,
  MovieImage,
  MovieInfo,
  MovieTitle,
} from './styles';
import { ScreenTopBar } from '../../components/ScreenTopBar';
import { useMyList } from '../../hooks/useMyList';

export const MyList = () => {
  const { myList } = useMyList();
  const { navigate } = useNavigation();

  return (
    <Container>
      <ScreenTopBar title="MyList" />

      <FlatList
        data={myList}
        keyExtractor={item => String(item.id)}
        renderItem={({ item: movie }) => (
          <Movie onPress={() => navigate('MovieDetails', { movie })}>
            <MovieImage
              source={{
                uri: movie.poster_path,
              }}
            />

            <MovieInfo>
              <MovieTitle>{movie.title}</MovieTitle>

              <MovieAddedAt>
                Added on:{' '}
                {format(new Date(movie.addedAt).getTime(), 'dd/MM/yyyy')}
              </MovieAddedAt>
            </MovieInfo>

            <Chevron>
              <ChevronRight />
            </Chevron>
          </Movie>
        )}
        ListEmptyComponent={
          <ListEmptyText>
            Your list is empty. Go discover some new movies!
          </ListEmptyText>
        }
      />
    </Container>
  );
};
