import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import './Home.css';

const Home = () => {
  const [query, setQuery] = useState('Batman');
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const fetchMovies = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const data = await searchMovies(query);
    setMovies(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = () => {
    fetchMovies();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchMovies();
    }
  };

  const clearSearch = () => {
    setQuery('');
    setMovies([]);
  };

  const toggleFavorite = (movie) => {
    const exists = favorites.find((fav) => fav.imdbID === movie.imdbID);
    const updated = exists
      ? favorites.filter((fav) => fav.imdbID !== movie.imdbID)
      : [...favorites, movie];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="home-container">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Search for movies..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
        <button onClick={clearSearch} className="clear-button">
          ✖
        </button>
      </div>

      <div className="favorites-count">
        ❤️ Favorites: {favorites.length}
      </div>

      {loading ? (
        <div className="loading">Loading movies...</div>
      ) : (
        <div className="movies-grid">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.imdbID} onClick={() => handleMovieClick(movie.imdbID)} style={{ cursor: 'pointer' }}>
                <MovieCard
                  movie={movie}
                  isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
                  toggleFavorite={toggleFavorite}
                />
              </div>
            ))
          ) : (
            <p className="no-movies">No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
