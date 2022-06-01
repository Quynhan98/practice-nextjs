import { Book } from '@interface/book';
import Card from './card';
import './list-book.css';

type ListBookProp = {
  books: Book[];
  handleRemove: (id: number) => void;
};

export const Books = (props: ListBookProp): JSX.Element => {
  const { books, handleRemove } = props;

  return (
    <div className="book-list">
      <div className="card-group">
        {books.map((item) => (
          <Card onDelete={handleRemove} key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
