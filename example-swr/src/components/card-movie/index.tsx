import { memo, useCallback, useState } from 'react';
import { IMovieCard } from '../../interfaces/movie/movie-card';
import { optionsContent } from '../../constants/mock-data';
import ContentCard from './content-card';
import ImageCard from './image-card';
import Popup from '../popup';
import './card-movie.css';

type TProps = {
  movie: IMovieCard;
  onUpdateStatus: () => void;
};

const CardMovie = (props: TProps): JSX.Element => {
  const { movie, onUpdateStatus } = props;

  const [selectedCard, setSelectedCard] = useState(0);

  const handleHover = useCallback((id: number) => {
    setSelectedCard(id);
  }, []);

  const removeActions = () => {
    setSelectedCard(0);
  };

  const renderActions = (value: boolean) => {
    return (
      <div className="hover on" onClick={removeActions}>
        <div className="option_content">
          {optionsContent.map((option) => (
            <Popup
              key={option.id}
              src={option.src}
              alt={option.alt}
              title={option.title}
              color={value && option.title === 'Favorite' ? 'pink' : 'black'}
              onHandleClick={onUpdateStatus}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="card">
        <ImageCard
          id={movie.id}
          originalTitle={movie.original_title}
          posterPath={movie.poster_path}
          onHandleHover={handleHover}
        />
        <ContentCard
          id={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          voteAverage={movie?.vote_average}
        />
        {selectedCard === movie.id && renderActions(movie?.is_favorite)}
      </div>
    </>
  );
};

export default memo(CardMovie);
