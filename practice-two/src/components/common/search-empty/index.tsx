import searchEmpty from 'assets/images/search-empty.png';
import './search-empty.css';

export const SearchEmptyResult = (): JSX.Element => {
  return (
    <div className="search-empty">
      <img className="search-empty_icon" src={searchEmpty} alt="search empty result" />
      <p className="search-empty_title">No result is found</p>
      <p className="search-empty_hint">Try using more generic keywords</p>
    </div>
  );
};
