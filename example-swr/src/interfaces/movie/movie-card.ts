import { IMovie } from './movie';

export interface IMovieCard extends IMovie {
  is_favorite: boolean;
}
