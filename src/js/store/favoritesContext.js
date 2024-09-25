// src/context/FavoritesContext.js
import React, { createContext, useContext, useState } from 'react';

export const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    if (!favorites.find(fav => fav.id === item.id && fav.type === item.type)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (id, type) => {
    setFavorites(favorites.filter(fav => !(fav.id === id && fav.type === type)));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
