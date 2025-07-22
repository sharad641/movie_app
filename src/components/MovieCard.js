import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, isFavorite, toggleFavorite }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
        alt={movie.Title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <button
          className={`favorite-button ${isFavorite ? 'remove' : 'add'}`}
          onClick={() => toggleFavorite(movie)}
        >
          {isFavorite ? '★ Remove Favorite' : '☆ Add to Favorite'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
