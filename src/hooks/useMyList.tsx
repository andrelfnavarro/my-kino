import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { IMovie } from '../interfaces/IMovie';

type MyListMovie = IMovie & { addedAt: string };
type MyList = MyListMovie[];

interface MyListContextData {
  myList: MyList;
  addToMyList: (movie: IMovie) => Promise<void>;
  removeFromMyList: (movie: IMovie) => Promise<void>;
  loading: boolean;
  alreadyInMyList: (movie: IMovie) => boolean;
}

const MyListContext = createContext<MyListContextData>({} as MyListContextData);

interface MyListProviderProps {
  children: React.ReactNode;
}

export const MyListProvider: React.FC<MyListProviderProps> = ({ children }) => {
  const [myList, setMyList] = useState<MyList>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStoragedData = async (): Promise<void> => {
      const myList = await AsyncStorage.getItem('@MyKino:myList');

      if (myList) {
        setMyList(JSON.parse(myList));
      }

      setLoading(false);
    };

    loadStoragedData();
  }, []);

  const addToMyList = async (movie: IMovie) => {
    const newItem: MyListMovie = {
      ...movie,
      addedAt: new Date().toString(),
    };

    const updatedMyList = [...myList, newItem];

    setMyList(updatedMyList);

    await AsyncStorage.setItem('@MyKino:myList', JSON.stringify(updatedMyList));
  };

  const removeFromMyList = async (movie: IMovie) => {
    const filteredMyList = myList.filter(item => item.id !== movie.id);

    await AsyncStorage.setItem(
      '@MyKino:myList',
      JSON.stringify(filteredMyList)
    );

    setMyList(filteredMyList);
  };

  const alreadyInMyList = (movie: IMovie) => {
    return myList.some(item => item.id === movie.id);
  };

  return (
    <MyListContext.Provider
      value={{
        myList,
        addToMyList,
        removeFromMyList,
        loading,
        alreadyInMyList,
      }}
    >
      {children}
    </MyListContext.Provider>
  );
};

export const useMyList = (): MyListContextData => {
  const context = useContext(MyListContext);

  if (!context) {
    throw new Error('useMyList must be used within an MyListProvider');
  }

  return context;
};
