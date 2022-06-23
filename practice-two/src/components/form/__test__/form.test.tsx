import { fireEvent, render, screen } from '@testing-library/react';
import { Form, FormProp } from '@components/form';
import { Book } from '@interface/book';

describe('Test Form Component', () => {
  const initialBook: Book = {
    id: 0,
    title: 'Book 1',
    author: 'Author 1',
    price: 0,
    desc: 'Description',
    image: 'base_img',
  };

  const initialValue: FormProp = {
    onHandleClose: jest.fn(),
    onCreate: jest.fn(),
    onHandleEdit: jest.fn(),
  };

  const initialFormSelected: FormProp = {
    selectedBook: initialBook,
    onHandleClose: jest.fn(),
    onCreate: jest.fn(),
    onHandleEdit: jest.fn(),
  };

  test('Component Form matchers DOM Snapshot', () => {
    const component = render(<Form {...initialValue} />);

    expect(component).toMatchSnapshot();
  });

  test('Component Form has been selected matchers DOM Snapshot', () => {
    const component = render(<Form {...initialFormSelected} />);

    expect(component).toMatchSnapshot();
  });

  // test('Component Form calls handleChange function when user enter values', () => {
  //   render(<Form {...initialFormSelected} />);

  //   fireEvent.click(screen.getByTestId('btn-submit'));

  //   expect(onHandleEdit).toBeCalled();
  // });
});
