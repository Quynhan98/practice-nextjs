import { fireEvent, render, screen } from '@testing-library/react';
import { Books, ListBookProp } from '@components/list-book';

describe('Test ListBook Component', () => {
  const books = [
    {
      title: 'Book 1',
      author: 'Author 1',
      price: 1,
      desc: 'Description 1',
      image: 'base_img',
      id: 0,
    },
    {
      title: 'Book 2',
      author: 'Author 2',
      price: 1,
      desc: 'Description 2',
      image: 'base_img',
      id: 1,
    },
  ];
  const initialBooks: ListBookProp = {
    books: books,
    onClickButtonEdit: jest.fn(),
    handleRemove: jest.fn(),
  };

  test('Component ListBook matchers DOM Snapshot', () => {
    const component = render(<Books {...initialBooks} />);

    expect(component).toMatchSnapshot();
  });

  test('Component ListBook should call onEdit function when user click the button', () => {
    render(<Books {...initialBooks} />);

    fireEvent.click(screen.getAllByText('Edit')[0]);
    expect(initialBooks.onClickButtonEdit).toHaveBeenCalled();
  });
});
