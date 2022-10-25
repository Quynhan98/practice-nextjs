import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '@components/header';

describe('Test Textbox Component', () => {
  const toggleForm = jest.fn();

  test('Component Header matchers DOM Snapshot', () => {
    const component = render(<Header toggleForm={toggleForm} />);

    expect(component).toMatchSnapshot();
  });

  test('Component Header should call toggleForm function when user click the button', () => {
    render(<Header toggleForm={toggleForm} />);

    fireEvent.click(screen.getByRole('button'));
    expect(toggleForm).toHaveBeenCalled();
  });
});
