import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        console.error('Error fetching movie details:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="movie-details-container">
        <div className="movie-skeleton">
          <div className="poster-skeleton skeleton"></div>
          <div className="info-skeleton">
            <div className="line-skeleton skeleton"></div>
            <div className="line-skeleton skeleton"></div>
            <div className="line-skeleton skeleton"></div>
            <div className="line-skeleton skeleton"></div>
            <div className="line-skeleton skeleton short"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!movie) return <div className="error">Movie not found.</div>;

  return (
    <div className="movie-details-container">
      <div className="movie-card fade-in">
        <img
          className="movie-poster"
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
          alt={`Poster of ${movie.Title}`}
        />
        <div className="movie-info">
          <h2 className="movie-title">{movie.Title}</h2>
          <p><span>📅 Year:</span> {movie.Year}</p>
          <p><span>🎬 Genre:</span> {movie.Genre}</p>
          <p><span>🎥 Director:</span> {movie.Director}</p>
          <p><span>🎭 Actors:</span> {movie.Actors}</p>
          <p className="movie-plot">📝 {movie.Plot}</p>
          <p className="movie-rating">⭐ IMDb Rating: {movie.imdbRating}</p>
          <Link to="/" className="back-link">← Back to Movies</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
