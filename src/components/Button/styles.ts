import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const Title = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.shape};
`;
