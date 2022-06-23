import { render, screen } from '@testing-library/react';
import { SearchEmptyResult } from '@components/common/search-empty';

describe('Test SearchEmpty Component', () => {
  test('Component SearchEmpty matchers DOM Snapshot', () => {
    const component = render(<SearchEmptyResult />);

    expect(component).toMatchSnapshot();
  });

  test('Component SearchEmpty should render correctly', () => {
    render(<SearchEmptyResult />);

    expect(screen.getByTestId('search-empty')).toBeTruthy();
  });
});
