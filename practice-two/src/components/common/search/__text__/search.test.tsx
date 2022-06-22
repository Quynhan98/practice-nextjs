import { fireEvent, render, screen } from '@testing-library/react';
import Search from '..';

describe('Test Search Component', () => {
  test('Component Search matchers DOM Snapshot', () => {
    const component = render(<Search />);

    expect(component).toMatchSnapshot();
  });
});
