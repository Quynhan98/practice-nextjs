import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, FormProp } from '@components/form';
import { Book } from '@interface/book';

describe('Test Form Component', () => {
  const initialBook: Book = {
    id: 0,
    title: 'Book 1',
    author: 'Author 1',
    price: 1,
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

  test('Component Form calls handleChange function when user click', () => {
    render(<Form {...initialValue} />);

    fireEvent.click(screen.getByText('Create'));
    expect(initialValue.onCreate).toBeCalled();
  });

  test('Component Form handle Input when user enter value', () => {
    render(<Form {...initialValue} />);

    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Nhan' } });
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('Nhan');
  });

  // TODO
  // - I am writing test case for blur event.
  // However, my test case is not or dynamic in case of input with error
  // NEED
  //- I need a solution to this problem
  test('Component Form handle blur Input when user enter value', () => {
    render(<Form {...initialValue} />);

    fireEvent.blur(screen.getAllByRole('textbox')[0]);
    expect(screen.getAllByRole('textbox')[0]).not.toHaveFocus();
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: '' } });
    fireEvent.blur(screen.getAllByRole('textbox')[0]);
    expect(screen.getAllByRole('textbox')[0]).not.toHaveFocus();
  });

  test('Component Form has been selected matchers DOM Snapshot', () => {
    const component = render(<Form {...initialFormSelected} />);

    expect(component).toMatchSnapshot();
  });

  test('Component Form has been selected calls handleChange function when user click', () => {
    render(<Form {...initialFormSelected} />);

    fireEvent.click(screen.getByText('Edit'));
    expect(initialFormSelected.onHandleEdit).toBeCalled();
  });
});
