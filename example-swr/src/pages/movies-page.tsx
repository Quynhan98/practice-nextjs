import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import ListMovies from '../components/list-movie';
import { fetcherAll } from '../helpers/fetch-api';
import { transformedData } from '../helpers/transformed-data';
import { IMovieCard } from '../interfaces/movie/movie-card';
import { IPageMovie } from '../interfaces/movie/page-movie';
import { updateFavorite } from '../helpers/update-favorite';
import { favoriteURL, moviesTypeURL } from '../helpers/generate-url';

export const ListMovie = () => {
  const { movieType = '' } = useParams<string>();
  const [movies, setMovies] = useState<IMovieCard[]>([]);
  const [count, setCount] = useState<number>(1);
  const [genres, setGenres] = useState<number[]>([]);
  const [score, setScore] = useState(10);

  const urlMovieType: string = moviesTypeURL(movieType, count, genres, score);
  const urlFavorite: string = favoriteURL(count);

  const { data, error } = useSWR<IPageMovie[]>([urlMovieType, urlFavorite], fetcherAll);

  // useEffect only run if movieType change
  useEffect(() => {
    setCount(1);
  }, [movieType]);

  // useEffect run if data change
  useEffect(() => {
    if (data) {
      const newMovies = transformedData(data[0].results, data[1].results);
      let listMovies = newMovies;

      if (listMovies) {
        if (count > 1 && newMovies) {
          listMovies = [...movies, ...newMovies];
        }

        setMovies(listMovies);
      }
    }
  }, [data]);

  const handleLoadMore = async () => {
    const page = count + 1;

    setCount(page);
  };

  const handleUpdateStatus = useCallback(
    async (movie: IMovieCard) => {
      const status = await updateFavorite(movie.id, movie.is_favorite);

      if (movieType === 'favorite-movies') {
        const newMovies = movies.map((item) => {
          return item.id === movie.id ? { ...item, is_favorite: !item.is_favorite } : item;
        });

        if (status) {
          setMovies(
            newMovies.filter((movie) => {
              return movie.is_favorite === true;
            })
          );
        }
      } else {
        setMovies(
          movies.map((item) => {
            return item.id === movie.id ? { ...item, is_favorite: !item.is_favorite } : item;
          })
        );
      }
    },
    [movieType, movies]
  );

  return (
    <div>
      <ListMovies
        pageMovie={movies}
        onHandleClick={handleLoadMore}
        onUpdateStatus={handleUpdateStatus}
      />
    </div>
  );
};
