import { fireEvent, render, screen } from '@testing-library/react';
import App from '@app/App';
import useGetData from '@hooks/use-get-data';
import * as React from 'react';

jest.mock('@hooks/use-get-data', () => jest.fn());

describe('Test App', () => {
  beforeEach(() => {
    (useGetData as jest.Mock).mockImplementation(() => ({
      data: [
        {
          id: 1,
          title: 'title',
          author: 'nhan',
          price: 123,
          desc: 'this is a book',
          image: 'url',
        },
      ],
      error: 'Error Message',
    }));
  });

  // TODO
  // - Implement unit test for closeError function
  // NEED
  // - I need a solution to this problem
  const setErrorMock = jest.fn();
  const useStateSpy: any = jest.spyOn(React, 'useState');
  let button: HTMLButtonElement;

  useStateSpy.mockImplementation((init: any) => [init, setErrorMock]);

  test('App call setError', async () => {
    const { getByTestId } = render(<App />);

    button = getByTestId('btn-close-err') as HTMLButtonElement;
    fireEvent.click(button);
    expect(setErrorMock).toHaveBeenCalled();
  });

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

  test('App Click Edit toggle form', () => {
    render(<App />);

    fireEvent.click(screen.getAllByText('Edit')[0]);
    expect(screen.getByTestId('app')).toHaveTextContent('Edit Book');
  });

  test('App should call handle create', () => {
    render(<App />);

    fireEvent.click(screen.getByText('Add New Book'));
    expect(screen.getByText('Create New Book')).toHaveTextContent('Create New Book');
    fireEvent.click(screen.getByText('Create'));
  });

  //
  test('App handle edit', async () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole('button', { name: /Edit/i })[0]);
  });
});
