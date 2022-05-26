import { Button } from '@components/common/button';
import './header.css';

export const Header = (): JSX.Element => {
  return (
    <header className="page-header">
      <h2 className="heading">A list of books</h2>
      <div className="nav-btn">
        <Button color="btn-primary" size="btn-large" typeButton="button">
          Add New Book
        </Button>
      </div>
    </header>
  );
};
