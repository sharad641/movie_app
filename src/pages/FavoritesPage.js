import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(favs);
  }, []);

  const toggleFavorite = (movie) => {
    const updated = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added.</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={true}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
