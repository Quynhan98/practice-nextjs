import { MouseEvent } from 'react';
import { IMovieCard } from '../../interfaces/movie/movie-card';
import { Button } from '../button';
import CardMovie from '../card-movie';
import './list-movie.css';

type TProps = {
  pageMovie: IMovieCard[];
  title?: string;
  onUpdateStatus: (movie: IMovieCard) => void;
  onHandleClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const ListMovies = (props: TProps): JSX.Element => {
  const { pageMovie, title, onHandleClick, onUpdateStatus } = props;

  return (
    <>
      <div className="media">
        <div className="column_wrapper">
          <div className="content_wrapper">
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="content">
              <div className="white_column">
                <section className="page_wrapper">
                  {pageMovie?.length > 0 ? (
                    pageMovie?.map((movie) => (
                      <CardMovie
                        movie={movie}
                        onUpdateStatus={() => onUpdateStatus(movie)}
                        key={movie?.id}
                      />
                    ))
                  ) : (
                    <span>No items were found that match your query.</span>
                  )}
                </section>
                <Button onHandleClick={onHandleClick} title={'Load More'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListMovies;
