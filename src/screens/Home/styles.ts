import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 32}px 16px 0;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const MyListButton = styled(RectButton)`
  border-radius: 8px;

  align-items: center;
  flex-direction: row;
`;

export const MyListText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_700};

  margin-right: 4px;
`;

export const MyListIcon = styled(Feather).attrs({ name: 'bookmark' })`
  margin-left: auto;
  font-size: ${RFValue(20)}px;
`;

export const Category = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;
