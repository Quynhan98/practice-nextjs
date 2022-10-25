import { fireEvent, render, screen } from '@testing-library/react';
import { Popup } from '@components/common/popup';

describe('Test Popup Component', () => {
  const renderChildren = <p>Popup Content</p>;
  const handleClick = jest.fn();

  test('Component Popup matchers DOM Snapshot', () => {
    const component = render(<Popup handleClose={handleClick}>{renderChildren}</Popup>);

    expect(component).toMatchSnapshot();
  });

  test('Component Popup should render correctly', () => {
    render(<Popup handleClose={handleClick}>{renderChildren}</Popup>);

    expect(screen.getByTestId('popup')).toBeTruthy();
  });

  test('Component Popup should call handleOnClick function when user click the button', () => {
    render(<Popup handleClose={handleClick}>{renderChildren}</Popup>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toBeCalled();
  });
});
