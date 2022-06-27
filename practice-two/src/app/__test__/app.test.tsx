import { fireEvent, render, screen } from '@testing-library/react';
import App from '@app/App';

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

  test('App form', () => {
    render(<App />);

    fireEvent.change(screen.getByTestId('search'), { target: { value: 'Book' } });
    expect(screen.getByTestId('search')).toHaveValue('Book');
  });
});
