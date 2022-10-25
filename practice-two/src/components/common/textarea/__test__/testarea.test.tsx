import { fireEvent, render, screen } from '@testing-library/react';
import { Textarea, TextareaProp } from '@components/common/textarea';

describe('Test Textarea Component', () => {
  const handleInputChange = jest.fn();
  const handleBlur = jest.fn();

  const initialValue: TextareaProp = {
    label: 'Title',
    name: 'book-title',
    handleInput: handleInputChange,
    onHandleBlur: handleBlur,
  };

  const initialValueError: TextareaProp = {
    label: 'Title',
    name: 'book-title',
    messageErr: 'Input value error',
    handleInput: handleInputChange,
    onHandleBlur: handleBlur,
  };

  test('Component Textarea matchers DOM Snapshot', () => {
    const component = render(<Textarea {...initialValue} />);

    expect(component).toMatchSnapshot();
  });

  test('Component Textarea with DOM Snapshot match error message', () => {
    const component = render(<Textarea {...initialValueError} />);

    expect(component).toMatchSnapshot();
  });

  test('Component Textarea calls handleChange function when user enter values', () => {
    render(<Textarea {...initialValue} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'book' } });
    expect(handleInputChange).toHaveBeenCalled();
    expect(screen.getByRole('textbox')).toHaveValue('book');
  });

  test('Component Textarea calls handleBlur function when user enter values', () => {
    render(<Textarea {...initialValue} />);

    fireEvent.blur(screen.getByRole('textbox'));
    expect(handleBlur).toHaveBeenCalled();
  });

  test('Component Textarea with error message calls handleChange function when user enter values', () => {
    render(<Textarea {...initialValueError} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'book' } });
    expect(handleInputChange).toHaveBeenCalled();
    expect(screen.getByRole('textbox')).toHaveValue('book');
  });

  test('Component Textarea with error message calling handler function when user enters value', () => {
    render(<Textarea {...initialValueError} />);

    fireEvent.blur(screen.getByRole('textbox'));
    expect(handleBlur).toHaveBeenCalled();
    expect(screen.getByTestId('input-error')).toHaveTextContent('Input value error');
  });
});
