import { fireEvent, render } from '@testing-library/react';
import Search from '@components/common/search';

describe('Test Search Component', () => {
  const handleChange = jest.fn();

  test('Component Search matchers DOM Snapshot', () => {
    const component = render(<Search onChange={handleChange} />);

    expect(component).toMatchSnapshot();
  });

  test('Component Search calls handleChange function when user enter values', () => {
    const { getByTestId } = render(<Search onChange={handleChange} />);

    fireEvent.change(getByTestId('search'), { target: { value: 'book' } });
    expect(handleChange).toHaveBeenCalled();
    expect(getByTestId('search')).toHaveValue('book');
  });
});
