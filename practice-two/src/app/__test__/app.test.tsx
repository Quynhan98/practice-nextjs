import { fireEvent, render, screen } from '@testing-library/react';
import App from '@app/App';
import { Book } from '@interface/book';
import { Books } from '@components/list-book';

const initialBook: Book[] = [
  {
    title: 'Book 1',
    author: 'Author 1',
    price: 1,
    desc: 'Description 1',
    image: 'base_img',
    id: 0,
  },
];

describe('Test App', () => {
  test('App matchers DOM Snapshot', () => {
    const component = render(<App />);

    expect(component).toMatchSnapshot();
  });

  test('App should call Form Create', () => {
    render(<App />);

    fireEvent.click(screen.getByText('Add New Book'));
    expect(screen.getByText('Create New Book')).toHaveTextContent('Create New Book');
    fireEvent.click(screen.getByText('Cancel'));
    expect(screen.getByTestId('app')).not.toHaveTextContent('Create New Book');
  });

  test('App should call Search', () => {
    render(<App />);

    fireEvent.change(screen.getByTestId('search'), { target: { value: 'Book' } });
    expect(screen.getByTestId('search')).toHaveValue('Book');
  });

  test('App should call button edit', () => {
    const clickButtonEdit = jest.fn();
    const handleRemove = jest.fn();
    render(<App />);
    render(
      <Books books={initialBook} handleRemove={handleRemove} onClickButtonEdit={clickButtonEdit} />
    );

    fireEvent.click(screen.getByText('Edit'));
    expect(clickButtonEdit).toHaveBeenCalled();
  });
});
