import { memo } from 'react';
import { Link } from 'react-router-dom';
import './content-card.css';

type TProps = {
  id: number;
  title: string;
  releaseDate: string;
  voteAverage: number;
};

const ContentCard = (props: TProps): JSX.Element => {
  const { id, title, releaseDate, voteAverage } = props;
  let point: number | string;

  if (voteAverage) {
    point = voteAverage * 10;
  } else {
    point = 'NR';
  }

  return (
    <div className="content">
      <div className="consensus tight">
        <div className="outer_ring">
          <div
            className="user_score_chart"
            data-percent="78.0"
            data-track-color="#204529"
            data-bar-color="#21d07a"
          >
            <div className="percent">
              <span className="icon">{point}</span>
            </div>
          </div>
        </div>
      </div>
      <h2>
        <Link to={`/movie/${id}`} title={title}>
          {title}
        </Link>
      </h2>
      <p>{releaseDate}</p>
    </div>
  );
};

export default memo(ContentCard);
