import { Genre } from '../../../../interfaces/movie/movie-info';
import { options } from '../../../../constants/mock-data';
import { convertMinsToHrsMins } from '../../../../helpers/convert-time';
import Tooltip from '../../../tooltip';
import './info-movie.css';

type TProps = {
  title: string;
  releaseDate: string;
  genres: Genre[];
  runtime: number;
  overview: string;
  scoreVoteAverage: number;
};

const InfoMovie = (props: TProps): JSX.Element => {
  const { title, releaseDate, genres, runtime, overview, scoreVoteAverage } = props;
  const time = convertMinsToHrsMins(runtime);
  let score: number | string;

  if (scoreVoteAverage) {
    score = scoreVoteAverage * 10;
  } else {
    score = 'NR';
  }

  return (
    <section className="info_movie">
      <div className="info_wrapper">
        <div className="tittle">
          <h2>
            <a href="#">{title}</a>
            <span className="tag release_date">({releaseDate?.split('', 4)})</span>
          </h2>
          <div className="facts">
            <span className="genres">
              {genres?.map((genre) => (
                <a href="#" key={genre.id}>
                  {genre.name}
                </a>
              ))}
            </span>
            <span className="runtime">{time}</span>
          </div>
        </div>
        <ul className="options">
          <li className="chart">
            <div className="details">
              <div className="outer_ring">
                <div className="user_score_chart">
                  <div className="percent">
                    <span className="icon icon-r73">{score}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text">
              User
              <br />
              Score
            </div>
          </li>
          {options.map((option) => (
            <li className="tooltip" key={option.id}>
              <i>
                <img src={option.src} alt={option.alt} />
              </i>
              <Tooltip text={option.text} />
            </li>
          ))}
        </ul>
        <div className="overview">
          <h3>Overview</h3>
          <p className="desc">{overview}</p>
        </div>
      </div>
    </section>
  );
};
export { InfoMovie };
