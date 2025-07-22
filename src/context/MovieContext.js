// src/context/MovieContext.js
import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    if (!favorites.some((m) => m.imdbID === movie.imdbID)) {
      setFavorites((prev) => [...prev, movie]);
    }
  };

  const removeFromFavorites = (imdbID) => {
    setFavorites((prev) => prev.filter((m) => m.imdbID !== imdbID));
  };

  const isFavorite = (imdbID) => favorites.some((m) => m.imdbID === imdbID);

  return (
    <MovieContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </MovieContext.Provider>
  );
};
