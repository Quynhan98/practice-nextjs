import { Button } from '@components/common/button';
import './header.css';

type HeaderProp = {
  toggleForm: () => void;
};

export const Header = (props: HeaderProp): JSX.Element => {
  const { toggleForm } = props;

  return (
    <header className="page-header">
      <h2 className="heading">A list of books</h2>
      <div className="nav-btn">
        <Button handleClick={toggleForm} color="btn-primary" size="btn-large" typeButton="button">
          Add New Book
        </Button>
      </div>
    </header>
  );
};
