import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import Movie from '../components/movie';
import { fetcher } from '../helpers/fetch-api';
import { movieURL } from '../helpers/generate-url';
import { IMovieInfo } from '../interfaces/movie/movie-info';

const SingleMoviePage = (): JSX.Element => {
  const { id } = useParams<string>();

  if (id) {
    const urlMovie: string = movieURL(id);

    const { data, error } = useSWR<IMovieInfo>(urlMovie, fetcher);

    if (data) {
      return <Movie movie={data} />;
    }
  }

  return <div>loading</div>;
};

export default SingleMoviePage;
