import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
`;

export const Genre = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_500};

  margin-bottom: 4px;
`;

export const Movie = styled(TouchableHighlight)`
  margin: 0 4px;
  border-radius: 8px;
`;

export const MovieImage = styled(Image)`
  width: 154px;
  height: 231px;

  border-radius: 8px;
`;

export const MovieInfo = styled.View`
  margin-top: 8px;

  width: 165px;
`;

export const MovieTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;
