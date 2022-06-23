import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Uploader, UploaderProp } from '@components/common/uploader';
import '@testing-library/jest-dom/extend-expect';

describe('Test Uploader Component', () => {
  const handleChangeImage = jest.fn();
  const handleBlur = jest.fn();

  const initialValue: UploaderProp = {
    label: 'Title',
    messageErr: '',
    name: 'book-title',
    baseImage: 'base_img',
    handleChange: handleChangeImage,
    onHandleBlur: handleBlur,
  };

  const initialValueError: UploaderProp = {
    label: 'Title',
    messageErr: 'Image error',
    name: 'book-image',
    baseImage: '',
    handleChange: handleChangeImage,
    onHandleBlur: handleBlur,
  };

  test('Component Uploader matchers DOM Snapshot', () => {
    const component = render(<Uploader {...initialValue} />);

    expect(component).toMatchSnapshot();
  });

  test('Component Uploader with DOM Snapshot match error message', () => {
    const component = render(<Uploader {...initialValueError} />);

    expect(component).toMatchSnapshot();
  });

  // TO-DO
  // - I can't test the case of calling the handChange function
  // NEED
  // -

  test.only('Component Uploader calls handleChange function when user enter values', async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<Uploader {...initialValue} />);
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    const input = getByTestId('uploader-img');
    await user.upload(input, file);
    expect(input.files[0]).toEqual(file);
  });

  test('Component Uploader calls handleBlur function when user enter values', () => {
    const { getByTestId } = render(<Uploader {...initialValue} />);

    fireEvent.blur(getByTestId('uploader-img'));
    expect(initialValue.onHandleBlur).toHaveBeenCalled();
  });

  test('Component Uploader with error message calling handler function when user enters value', () => {
    const { getByTestId } = render(<Uploader {...initialValueError} />);

    fireEvent.blur(getByTestId('uploader-img'));
    expect(handleBlur).toHaveBeenCalled();
    expect(screen.getByTestId('img-error')).toHaveTextContent('Image error');
  });
});
