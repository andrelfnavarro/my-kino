import { Feather } from '@expo/vector-icons';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {
  getBottomSpace,
  getStatusBarHeight,
  isIphoneX,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 32}px 16px
    ${isIphoneX() ? getBottomSpace() : 16}px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Movie = styled(RectButton)`
  position: relative;
  width: 100%;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  border-radius: 4px;
  margin-bottom: 8px;
`;

export const MovieImage = styled.Image`
  width: 80px;
  height: 120px;

  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const MovieInfo = styled.View`
  flex: 1;
  padding: 16px;
`;

export const MovieTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(14)}px;
`;

export const MovieAddedAt = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;
`;

export const Chevron = styled.View`
  height: 100%;
  justify-content: center;
  padding-right: 12px;
`;

export const ChevronRight = styled(Feather).attrs({
  name: 'chevron-right',
})`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;

export const ListEmptyText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;

  margin-top: 64px;

  text-align: center;
`;
