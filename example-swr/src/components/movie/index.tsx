import { IMovieInfo } from '../../interfaces/movie/movie-info';
import ContentMovie from './content-movie';
import './movie.css';

type TProps = {
  movie: IMovieInfo;
};

const Movie = (props: TProps): JSX.Element => {
  const { movie } = props;

  return (
    <section className="movie">
      <div className="banner">
        <img
          src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path}`}
          alt={movie?.original_title}
          className="banner_image"
        />
        <span className="layer"></span>
        <ContentMovie
          posterPath={movie.poster_path}
          homepage={movie.homepage}
          title={movie.title}
          releaseDate={movie.release_date}
          genres={movie.genres}
          runtime={movie.runtime}
          overview={movie.overview}
          scoreVoteAverage={movie.vote_average}
        />
      </div>
    </section>
  );
};

export default Movie;
