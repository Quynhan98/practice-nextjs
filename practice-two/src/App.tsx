import { Popup } from '@components/common/popup';
import { Form } from '@components/form';
import { Header } from '@components/header';
import { Books } from '@components/list-book';
import { SERVER_MESSAGES } from '@constant/messages';
import URL_PAGE from '@constant/url';
import { formValidate, ValidationResult } from '@helpers/validation-form';
import { Book } from '@interface/book';
import { postData } from '@services/fetch-api';
import { useEffect, useState } from 'react';
import './styles/main.css';

const App = (): JSX.Element => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError('');
      }, 3000);
    }
  }, [isError]);

  const handelToggleForm = (): void => {
    setIsOpen(!isOpen);
  };

  const handleCreate = async (book: Book): Promise<void> => {
    try {
      const validateFormCreate: ValidationResult = formValidate(book);

      if (validateFormCreate.isValid) {
        await postData(book, URL_PAGE);

        setBooks([...books, book]);
        handelToggleForm();
      }
    } catch (error) {
      setIsError(SERVER_MESSAGES.SERVER_RESPONSE_ERROR);
      console.error(error);
      handelToggleForm();
    }
  };

  return (
    <div className="container">
      <Header toggleForm={handelToggleForm} />
      <Books />
      {isOpen && (
        <Popup handleClose={handelToggleForm}>
          <Form onCreate={handleCreate} onHandleClose={handelToggleForm} />
        </Popup>
      )}
      {isError && <span className="notification-error">{isError}</span>}
    </div>
  );
};

export default App;
