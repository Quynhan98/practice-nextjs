import { useState } from 'react';
import { Book } from '@interface/book';
import { formValidate, ValidationResult } from '@helpers/validation-form';
import { Button } from '@components/common/button';
import { Textbox } from '@components/common/textbox';
import { Uploader } from '@components/common/uploader';
import { Textarea } from '@components/common/textarea';
import './form.css';

type FormProp = {
  selectedBook?: Book;
  onHandleClose?: () => void;
  onCreate: (book: Book) => void;
  onHandleEdit: (book: Book) => void;
};

export type InputProp = {
  title?: string;
  author?: string;
  price?: number;
  desc?: string;
  image?: string;
  id?: number;
};

type MessagesErr = {
  title: string;
  author: string;
  price: string;
  desc: string;
  img: string;
};

const initialBook: Book = {
  id: 0,
  title: '',
  author: '',
  price: 0,
  desc: '',
  image: '',
};

const initialErrorMsgs: MessagesErr = {
  title: '',
  author: '',
  price: '',
  desc: '',
  img: '',
};

export const Form = (props: FormProp): JSX.Element => {
  const { selectedBook, onHandleClose, onCreate, onHandleEdit } = props;
  const [book, setBook] = useState<Book>(selectedBook || initialBook);
  const [msgError, setMsgError] = useState(initialErrorMsgs);

  const uploadImage = (img: string) => {
    setBook({ ...book, image: img });
  };

  const handleInputValue = (value: InputProp) => {
    setBook({ ...book, ...value });
  };

  const handleBlur = (): void => {
    const validateForm: ValidationResult = formValidate(book);

    if (!validateForm.isValid) {
      const messages = validateForm.errors!;

      setMsgError(messages);
    } else {
      setMsgError({} as MessagesErr);
    }
  };

  const handleCreate = (): void => {
    const newBook: Book = { ...book, id: Date.now() };

    onCreate(newBook);
  };

  const handleEdit = (): void => {
    onHandleEdit(book);
  };

  return (
    <div className="container">
      <h2 className="form-heading">{selectedBook ? 'Edit Book' : 'Create New Book'}</h2>
      <form className="book-form">
        <Textbox
          onHandleBlur={handleBlur}
          handleInput={handleInputValue}
          label="Title"
          inputType="text"
          name="title"
          value={book.title}
          messageErr={msgError.title}
        />
        <Textbox
          onHandleBlur={handleBlur}
          handleInput={handleInputValue}
          label="Author"
          inputType="text"
          name="author"
          value={book.author}
          messageErr={msgError.author}
        />
        <Textbox
          onHandleBlur={handleBlur}
          handleInput={handleInputValue}
          label="Price"
          inputType="text"
          name="price"
          value={book.price}
          messageErr={msgError.price}
        />
        <Textarea
          onHandleBlur={handleBlur}
          rows={3}
          handleInput={handleInputValue}
          label="Description"
          name="desc"
          value={book.desc}
          messageErr={msgError.desc}
        />
        <Uploader
          onHandleBlur={handleBlur}
          handleChange={uploadImage}
          baseImage={book.image}
          label="Image"
          name="image"
          messageErr={msgError.img}
        />
        <div className="group-btn">
          <Button
            handleClick={selectedBook ? handleEdit : handleCreate}
            typeButton="button"
            size="btn-small"
            color="btn-secondary"
          >
            {selectedBook ? 'Edit' : 'Create'}
          </Button>
          <Button
            handleClick={onHandleClose}
            typeButton="button"
            size="btn-small"
            color="btn-warning"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
