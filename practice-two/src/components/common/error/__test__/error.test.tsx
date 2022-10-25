import { fireEvent, render, screen } from '@testing-library/react';
import { Error } from '@components/common/error';

describe('Test Error Component', () => {
  const textError = 'Error Message';
  const handleClick = jest.fn();

  test('Component Error matchers DOM Snapshot', () => {
    const component = render(<Error onHandleClick={handleClick}>{textError}</Error>);

    expect(component).toMatchSnapshot();
  });

  test('component Error should render correctly', () => {
    render(<Error onHandleClick={handleClick}>{textError}</Error>);

    expect(screen.getByTestId('error')).toHaveTextContent(textError);
  });

  test('Component Error should call handleOnClick function when user click the button', async () => {
    render(<Error onHandleClick={handleClick}>{textError}</Error>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toBeCalled();
  });
});
