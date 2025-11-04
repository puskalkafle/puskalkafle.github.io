import React, { useContext, useReducer, createContext } from 'react';

export type FavsReducerProps = any;
const initialState: FavsReducerProps = [];

const favouritesReducer = (state: FavsReducerProps, action: any) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITES':
      localStorage.setItem('favs', action.payload);
      return action.payload;
    case 'REMOVE_FROM_FAVOURITES':
      localStorage.setItem('favs', action.payload);
      return action.payload;
    default:
      return state;
  }
};

const FavouritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favouritesReducer, initialState);
  return (
    <FavContext.Provider value={[state, dispatch]}>{children}</FavContext.Provider>
  );
};
const FavContext = createContext<FavsReducerProps | any>(initialState);

const useFavState = () => {
  const context = useContext(FavContext);
  if (context === undefined) {
    throw new Error('useFavState must be used within a FavouritesProvider');
  }
  return context;
};


export { FavContext,useFavState };
export default FavouritesProvider;
