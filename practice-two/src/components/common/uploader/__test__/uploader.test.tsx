import { fireEvent, render, screen } from '@testing-library/react';
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

  test('Component Uploader calls handleChange function when user enter values', async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<Uploader {...initialValue} />);
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const input = getByTestId('uploader-img') as HTMLInputElement;

    await user.upload(input, file);
    expect(input.files?.item(0)).toStrictEqual(file);
    expect(input.files).toHaveLength(1);
    expect(input.files![0]).toStrictEqual(file);
  });

  test('Component Uploader calls handleBlur function when user enter values', () => {
    const { getByTestId } = render(<Uploader {...initialValue} />);

    fireEvent.blur(getByTestId('uploader-img'));
    expect(initialValue.onHandleBlur).toHaveBeenCalled();
  });

  test('Component Uploader with error message calls handleChange function when user enter values', async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<Uploader {...initialValueError} />);
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const input = getByTestId('uploader-img') as HTMLInputElement;

    await user.upload(input, file);
    expect(input.files?.item(0)).toStrictEqual(file);
    expect(input.files).toHaveLength(1);
    expect(input.files![0]).toStrictEqual(file);
  });

  test('Component Uploader with error message calling handlerBlur function when user enters value', () => {
    const { getByTestId } = render(<Uploader {...initialValueError} />);

    fireEvent.blur(getByTestId('uploader-img'));
    expect(handleBlur).toHaveBeenCalled();
    expect(screen.getByTestId('img-error')).toHaveTextContent('Image error');
  });
});
