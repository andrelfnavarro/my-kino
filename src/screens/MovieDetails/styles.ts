import styled from 'styled-components/native';
import {
  getBottomSpace,
  getStatusBarHeight,
  isIphoneX,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { AgeRating } from '../../types/AgeRating';
import { Image } from 'react-native';

interface AgeRatingProps {
  ageRating: AgeRating;
}

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 32}px 16px
    ${isIphoneX() ? getBottomSpace() : 16}px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(28)}px;

  margin: 4px 0;
`;

export const Poster = styled(Image)`
  width: 100%;
  aspect-ratio: 0.67;

  border-radius: 8px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ReleaseYear = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;

  margin-right: 16px;
`;

export const AgeRestriction = styled.View<AgeRatingProps>`
  background-color: ${({ theme, ageRating }) =>
    theme.colors[ageRating.toLowerCase()]};
  border-radius: 4px;

  padding: 2px 6px;

  margin-right: 16px;
`;

export const Age = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(14)}px;
`;

export const Footer = styled.View`
  margin-top: auto;
`;

export const Runtime = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;
  margin-right: auto;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;
  margin-top: 16px;
`;
