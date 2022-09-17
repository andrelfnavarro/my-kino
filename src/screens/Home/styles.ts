import styled from 'styled-components/native';
import { Dimensions, Image, TextInput } from 'react-native';
import {
  BorderlessButton,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 48}px 16px 0;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const WishlistIcon = styled(Feather).attrs({ name: 'bookmark' })`
  margin-left: auto;
  font-size: ${RFValue(20)}px;
`;

export const Movie = styled.View`
  align-items: center;
`;

export const MovieImage = styled(Image)`
  width: 150px;
  height: 200px;
  border-radius: 8px;
`;

export const MovieInfo = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const MovieTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;
