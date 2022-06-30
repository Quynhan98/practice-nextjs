import '../styles/main.css';
import { ChangeEvent, useCallback, useState } from 'react';
import { SERVER_MESSAGES } from '@constant/messages';
import URL_PAGE from '@constant/url';
import { formValidate, ValidationResult } from '@helpers/validation-form';
import { deleteData, postData, updateData } from '@services/fetch-api';
import useGetData from '@hooks/use-get-data';
import { useDebounce } from '@hooks/use-debounce';
import { Book } from '@interface/book';
import { Error } from '@components/common/error';
import { Popup } from '@components/common/popup';
import Search from '@components/common/search';
import { Form } from '@components/form';
import { Header } from '@components/header';
import { Books } from '@components/list-book';
import { SearchEmptyResult } from '@components/common/search-empty';

export function TestComponent() {
  const [value, setValue] = useState(0);

  const inc = () => {
    setValue(value + 1);
  };

  const debouncedValue = useDebounce(value, 1000);
  return (
    <div>
      <button onClick={inc}>Increment</button>
      <span data-testid="debouncedValue">{debouncedValue}</span>
      <span data-testid="value">{value}</span>
    </div>
  );
}

const App = (): JSX.Element => {
  const [book, setBook] = useState<Book | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const searchValue = useDebounce(search, 500);
  const { data, error, setData, setError } = useGetData<Book>(`${URL_PAGE}${searchValue}`);

  const handelToggleForm = (): void => {
    setIsOpen((prevIsOpen) => (prevIsOpen = !prevIsOpen));

    if (isOpen) {
      setBook(undefined);
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  const handleCreate = async (book: Book): Promise<void> => {
    try {
      const validateFormCreate: ValidationResult = formValidate(book);

      if (validateFormCreate.isValid) {
        await postData(book, URL_PAGE);

        setData([book, ...data]);
        handelToggleForm();
      }
    } catch (error) {
      setError(SERVER_MESSAGES.SERVER_RESPONSE_ERROR);
      handelToggleForm();
    }
  };

  const handleDelete = useCallback(
    async (id: number): Promise<void> => {
      try {
        await deleteData(id, URL_PAGE);
        const bookArr: Book[] = data.filter((item) => item.id !== id);

        setData(bookArr);
      } catch (error) {
        setError(SERVER_MESSAGES.SERVER_DELETE_ERROR);
      }
    },
    [data, setData, setError]
  );

  const clickButtonEdit = (book: Book): void => {
    setBook(book);
    handelToggleForm();
  };

  const handleEditBook = async (book: Book): Promise<void> => {
    try {
      const validateFormEdit: ValidationResult = formValidate(book);

      if (validateFormEdit.isValid) {
        await updateData(book.id, URL_PAGE, book);

        const newBooks: Book[] = data.map((oldBook) => {
          if (oldBook.id === book.id) {
            return book;
          } else {
            return oldBook;
          }
        });

        setData(newBooks);
        handelToggleForm();
      }
    } catch (error) {
      setError(SERVER_MESSAGES.SERVER_EDIT_ERROR);
    }
  };

  const closeError = (): void => {
    setError('');
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm: string = e.target.value;

    setSearch(`?title_like=${searchTerm}`);
  };

  return (
    <div className="container" data-testid="app">
      <Header toggleForm={handelToggleForm} />
      <Search onChange={handleChangeSearch} />
      {searchValue && data.length === 0 ? (
        <SearchEmptyResult />
      ) : (
        <Books onClickButtonEdit={clickButtonEdit} handleRemove={handleDelete} books={data} />
      )}
      {isOpen && (
        <Popup handleClose={handelToggleForm}>
          <Form
            onHandleEdit={handleEditBook}
            onCreate={handleCreate}
            onHandleClose={handelToggleForm}
            selectedBook={book}
          />
        </Popup>
      )}
      {error && <Error onHandleClick={closeError}>{error}</Error>}
      <TestComponent />
    </div>
  );
};

export default App;
