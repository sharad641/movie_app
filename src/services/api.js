// src/api.js

const API_KEY = '5c44e8a3';
const BASE_URL = 'https://www.omdbapi.com/';

// 1. Search movies by title (with optional year)
export const searchMovies = async (query, year = '') => {
  try {
    const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}${year ? `&y=${year}` : ''}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.Search || [];
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

// 2. Get detailed movie info by IMDb ID
export const getMovieDetails = async (imdbID) => {
  try {
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

// 3. Fetch movies by year (for "See all movies from year")
export const getMoviesByYear = async (year) => {
  try {
    const url = `${BASE_URL}?apikey=${API_KEY}&s=movie&y=${year}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.Search || [];
  } catch (error) {
    console.error('Error fetching movies by year:', error);
    return [];
  }
};
