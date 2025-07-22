const API_KEY = '5c44e8a3';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
  const data = await res.json();
  return data.Response === "True" ? data.Search : [];
};
