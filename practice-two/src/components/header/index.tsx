import { Button } from '@components/common/button';
import { Popup } from '@components/common/popup';
import { Form } from '@components/form';
import { Book } from '@interface/book';
import './header.css';

type HeaderProp = {
  isOpen: boolean;
  onHandleClose: () => void;
  onHandleCreate: (book: Book) => void;
};

export const Header = (props: HeaderProp): JSX.Element => {
  const { isOpen, onHandleClose, onHandleCreate } = props;

  return (
    <header className="page-header">
      <h2 className="heading">A list of books</h2>
      <div className="nav-btn">
        <Button
          handleClick={onHandleClose}
          color="btn-primary"
          size="btn-large"
          typeButton="button"
        >
          Add New Book
        </Button>
      </div>
      {isOpen && (
        <Popup handleClose={onHandleClose}>
          <Form
            labelButton="Create"
            formTitle="Create New Book"
            onCreate={onHandleCreate}
            onHandleClose={onHandleClose}
          />
        </Popup>
      )}
    </header>
  );
};
