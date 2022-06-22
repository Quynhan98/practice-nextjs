import { API } from "../constants/api-key";
import { BASE_URL } from "../constants/base-url";

const moviesTypeURL = (paramUrl: string, count: number, genres: number[], score: number): string => {
  switch (paramUrl) {
    case 'favorite-movies':
      return `${BASE_URL}/account/${API.ACCOUNT_ID}/favorite/movies?api_key=${API.API_KEY}&session_id=${API.SESSION_ID}&language=en-US&sort_by=created_at.asc&page=${count}`;
    case 'now-playing':
      return `${BASE_URL}/movie/now_playing?api_key=${API.API_KEY}&language=en-US&page=${count}&with_genres=${genres}&vote_average.lte=${score}`;
    case 'up-coming':
      return `${BASE_URL}/movie/upcoming?api_key=${API.API_KEY}&language=en-US&page=${count}&with_genres=${genres}&vote_average.lte=${score}`;
    case 'top-rated':
      return `${BASE_URL}/movie/top_rated?api_key=${API.API_KEY}&language=en-US&page=${count}&with_genres=${genres}&vote_average.lte=${score}`;
    default:
      return `${BASE_URL}/movie/popular?api_key=${API.API_KEY}&language=en-US&page=${count}`;
  }
};

const favoriteURL = (count: number): string => {
  return `${BASE_URL}/account/${API.ACCOUNT_ID}/favorite/movies?api_key=${API.API_KEY}&session_id=${API.SESSION_ID}&language=en-US&sort_by=created_at.asc&page=${count}`;
}

const movieURL = (id: string): string => {
  return `${BASE_URL}/movie/${id}?api_key=${API.API_KEY}&language=en-US`;
}

export { moviesTypeURL, favoriteURL, movieURL }
