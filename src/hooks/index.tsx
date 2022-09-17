import React from 'react';
import { MyListProvider } from './useMyList';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return <MyListProvider>{children}</MyListProvider>;
};
