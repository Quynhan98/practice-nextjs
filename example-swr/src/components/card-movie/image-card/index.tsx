import { memo } from 'react';
import { Link } from 'react-router-dom';
import noImage from '../../../assets/no-image.svg';
import Optional from '../../optional';
import './image-card.css';

type TProps = {
  id: number;
  originalTitle: string;
  posterPath: string;
  onHandleHover: (id: number) => void;
};

const ImageCard = (props: TProps): JSX.Element => {
  const { id, originalTitle, posterPath, onHandleHover } = props;

  return (
    <div className="image">
      <div className="wrapper">
        <Link to={`/movie/${id}`}>
          <img
            className="poster"
            src={
              posterPath
                ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`
                : noImage
            }
            alt={originalTitle}
          />
        </Link>
        <Optional onHandleClick={onHandleHover} id={id} />
      </div>
    </div>
  );
};

export default memo(ImageCard);
