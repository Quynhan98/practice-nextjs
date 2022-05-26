import { books } from '@constant/data/books';
import { Card } from './card';
import './list-book.css';

export const Books = (): JSX.Element => {
  return (
    <div className="book-list">
      <div className="card-group">
        {books.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
