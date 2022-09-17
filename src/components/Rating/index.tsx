import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Container, RatingNumber } from './styles';

interface RatingProps {
  rating: number;
}

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  const filledStars = Math.floor(rating / 2);
  const maxStars = Array(5 - filledStars).fill('staro');
  const r = [...Array(filledStars).fill('star'), ...maxStars];

  return (
    <Container>
      <RatingNumber>{(rating / 2).toFixed(1)}</RatingNumber>

      {r.map((type, index) => {
        return <AntDesign key={index} name={type} size={12} color="tomato" />;
      })}
    </Container>
  );
};
