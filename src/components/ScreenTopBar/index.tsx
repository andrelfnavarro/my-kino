import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';

import { Container, Title, TitleContainer } from './styles';

interface ScreenTopBarProps {
  title: string;
}

export const ScreenTopBar: React.FC<ScreenTopBarProps> = ({ title }) => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <BackButton onPress={goBack} />

      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>

      <View style={{ width: 24 }} />
    </Container>
  );
};
