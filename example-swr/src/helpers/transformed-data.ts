import { IMovie } from '../interfaces/movie/movie';
import { IMovieCard } from '../interfaces/movie/movie-card';
import { IMovieInfo } from '../interfaces/movie/movie-info';

type TResult = IMovieCard | IMovieInfo | IMovie;

export const transformedData = (result1: TResult[], result2: TResult[]) => {
  if (!result1 || !result2) {
    return;
  }

  const newData = result1.map((item) => {
    return {
      ...item,
      is_favorite: !!result2.find((favorite) => item.id === favorite.id),
    };
  });

  return newData;
};
