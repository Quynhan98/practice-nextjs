import { fireEvent, render, screen } from '@testing-library/react';
import { Textbox, TextboxProp } from '@components/common/textbox';

describe('Test Textbox Component', () => {
  const handleInputChange = jest.fn();
  const handleBlur = jest.fn();

  const initialValue: TextboxProp = {
    label: 'Title',
    name: 'book-title',
    inputType: 'text',
    handleInput: handleInputChange,
    onHandleBlur: handleBlur,
  };

  const initialValueError: TextboxProp = {
    label: 'Title',
    name: 'book-title',
    inputType: 'text',
    messageErr: 'Input value error',
    handleInput: handleInputChange,
    onHandleBlur: handleBlur,
  };

  test('Component Textbox matchers DOM Snapshot', () => {
    const component = render(<Textbox {...initialValue} />);

    expect(component).toMatchSnapshot();
  });

  test('Component Textbox with DOM Snapshot match error message', () => {
    const component = render(<Textbox {...initialValueError} />);

    expect(component).toMatchSnapshot();
  });

  test('Component Textbox calls handleChange function when user enter values', () => {
    render(<Textbox {...initialValue} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'book' } });
    expect(handleInputChange).toHaveBeenCalled();
    expect(screen.getByRole('textbox')).toHaveValue('book');
  });

  test('Component Textbox calls handleBlur function when user enter values', () => {
    render(<Textbox {...initialValue} />);

    fireEvent.blur(screen.getByRole('textbox'));
    expect(handleBlur).toHaveBeenCalled();
  });

  test('Component Textbox with error message calls handleChange function when user enter values', () => {
    render(<Textbox {...initialValueError} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'book' } });
    expect(handleInputChange).toHaveBeenCalled();
    expect(screen.getByRole('textbox')).toHaveValue('book');
  });

  test('Component Textbox with error message calling handler function when user enters value', () => {
    render(<Textbox {...initialValueError} />);

    fireEvent.blur(screen.getByRole('textbox'));
    expect(handleBlur).toHaveBeenCalled();
    expect(screen.getByTestId('input-error')).toHaveTextContent('Input value error');
  });
});
