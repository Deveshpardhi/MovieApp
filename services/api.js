import axios from 'axios';

const API_KEY = '5c6dd5fb8c7d0cccb6a5da55cef8fe0f';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data.results;
};
