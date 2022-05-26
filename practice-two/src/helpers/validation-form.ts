import { VALIDATE_MESSAGES } from "@constant/messages";
import { Book } from "@interface/book";

export interface ValidationResult {
  isValid: boolean;
  errors?: {
    title: string;
    author: string;
    price: string;
    desc: string;
    img: string;
  }
}

/**
 * Validate empty input value
 * @param text input value
 * @returns true/false
 */
const isEmpty = (text: string | number): boolean => {
  return !!text;
}

/**
 * validate for form
 * @param book input value(Book)
 * @returns ValidationResult
 */
export const formValidate = (book: Book) => {
  let result: ValidationResult = { isValid: true };

  result.errors = {
    title: '',
    author: '',
    price: '',
    desc: '',
    img: ''
  };

  // Title
  if (!isEmpty(book.title)) {
    result.errors.title = VALIDATE_MESSAGES.BOOK_TITLE_REQUIRED;
  }

  // Author
  if (!isEmpty(book.author)) {
    result.errors.author = VALIDATE_MESSAGES.AUTHOR_REQUIRED;
  }

  // Price
  if (!isEmpty(book.price)) {
    result.errors.price = VALIDATE_MESSAGES.PRICE_REQUIRED;
  }

  // Desc
  if (!isEmpty(book.desc)) {
    result.errors.desc = VALIDATE_MESSAGES.DESC_REQUIRED;
  }

  //Image
  if (!isEmpty(book.image)) {
    result.errors.img = VALIDATE_MESSAGES.IMAGE_REQUIRED;
  }

  // Result
  const validate = result.errors;

  if (validate.author || validate.desc || validate.img || validate.price || validate.title) {
    result.isValid = false;
  }

  return result;
}
