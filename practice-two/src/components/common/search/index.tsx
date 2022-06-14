import { ChangeEventHandler, memo } from 'react';
import './search.css';

interface SearchProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Search = (props: SearchProps) => {
  const { onChange } = props;

  return (
    <div className="filter-search">
      <input type="search" placeholder="Search..." className="search-input" onChange={onChange} />
    </div>
  );
};

export default memo(Search);
