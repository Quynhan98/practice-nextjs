import { render, screen } from '@testing-library/react';
import { Fetch } from '..';

describe('Test Feat API', () => {
  test('it render', async () => {
    render(<Fetch />);

    const userList = await screen.findByTestId('user-list');
    expect(userList).toBeInTheDocument();
  });
});
