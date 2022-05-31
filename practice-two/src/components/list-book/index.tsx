import { Book } from '@interface/book';
import Card from './card';
import './list-book.css';

type ListBookProp = {
  books: Book[];
};

export const Books = (props: ListBookProp): JSX.Element => {
  const { books } = props;

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
