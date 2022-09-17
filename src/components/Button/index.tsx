import React from 'react';

import { Container, Title } from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps {
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
