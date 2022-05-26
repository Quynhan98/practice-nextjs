import { Button } from '@components/common/button';
import { Textbox } from '@components/common/textbox';
import { Uploader } from '@components/common/uploader';
import { convertBase64 } from '@helpers/encode';
import { formValidate, ValidationResult } from '@helpers/validation-form';
import { Book } from '@interface/book';
import { ChangeEvent, useState } from 'react';
import './form.css';

type FormProp = {
  formTitle: string;
  labelButton: 'Create' | 'Edit';
  selectedBook?: Book;
  onHandleClose?: () => void;
  onCreate?: (book: Book) => void;
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

export const Form = (props: FormProp): JSX.Element => {
  const { formTitle, selectedBook, labelButton, onHandleClose, onCreate } = props;
  const [book, setBook] = useState<Book>(selectedBook || initialBook);
  const [msgError, setMsgError] = useState({} as MessagesErr);

  const uploadImage = async (e: any): Promise<void> => {
    const file = e.target.files[0];
    const srcImage = (await convertBase64(file)) as string;

    setBook({ ...book, image: srcImage });
  };

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleBlur = (): void => {
    const { title, desc, author, price, image } = book;
    const validateForm: ValidationResult = formValidate(book);

    if (!title || !desc || !price || !author || !image) {
      const messages = validateForm.errors!;

      setMsgError(messages);
    } else {
      setMsgError({} as MessagesErr);
    }
  };

  const handleCreate = (): void => {
    const newBook: Book = { ...book, id: Date.now() };

    if (onCreate) {
      onCreate(newBook);
    }
  };

  return (
    <div className="container">
      <h2 className="form-heading">{formTitle}</h2>
      <form className="book-form">
        <Textbox
          onHandleBlur={handleBlur}
          handleChange={handleFieldChange}
          label="Title"
          inputType="text"
          name="title"
          value={book.title}
          messageErr={msgError.title}
        />
        <Textbox
          onHandleBlur={handleBlur}
          handleChange={handleFieldChange}
          label="Author"
          inputType="text"
          name="author"
          value={book.author}
          messageErr={msgError.author}
        />
        <Textbox
          onHandleBlur={handleBlur}
          handleChange={handleFieldChange}
          label="Price"
          inputType="number"
          name="price"
          value={book.price}
          messageErr={msgError.price}
        />
        <Textbox
          onHandleBlur={handleBlur}
          handleChange={handleFieldChange}
          label="Description"
          inputType="text"
          name="desc"
          value={book.desc}
          messageErr={msgError.desc}
        />
        <Uploader
          onHandleBlur={handleBlur}
          handleChange={uploadImage}
          label="Image"
          name="image"
          baseImage={book.image}
          messageErr={msgError.img}
        />
        <div className="group-btn">
          <Button
            handleClick={labelButton === 'Create' ? handleCreate : () => {}}
            typeButton="button"
            size="btn-small"
            color="btn-secondary"
          >
            {labelButton}
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
