import { fireEvent, render, screen } from '@testing-library/react';
import Card, { CardProp } from '@components/list-book/card';

describe('Test Card Component', () => {
  const initialCard: CardProp = {
    title: 'Book 1',
    author: 'Author 1',
    price: 1,
    desc: 'Description 1',
    image: 'base_img',
    id: 0,
    onDelete: jest.fn(),
    onEdit: jest.fn(),
  };

  test('Component Card matchers DOM Snapshot', () => {
    const component = render(<Card {...initialCard} />);

    expect(component).toMatchSnapshot();
  });

  test('Component Card should render correct', () => {
    render(<Card {...initialCard} />);

    expect(screen.getByText('Book 1')).toHaveTextContent('Book 1');
    expect(screen.getByText('Author 1')).toHaveTextContent('Author 1');
    expect(screen.getByTestId('price')).toHaveTextContent('Price: 1 USD');
    expect(screen.getByText('Description 1')).toHaveTextContent('Description 1');
  });

  test('Component Card should call onEdit function when user click the button', () => {
    render(<Card {...initialCard} />);

    fireEvent.click(screen.getByText('Edit'));
    expect(initialCard.onEdit).toHaveBeenCalled();
  });

  test('Component Card should call onDelete function when user click the button', () => {
    render(<Card {...initialCard} />);

    fireEvent.click(screen.getByText('Delete'));
    expect(initialCard.onDelete).toHaveBeenCalled();
  });
});
