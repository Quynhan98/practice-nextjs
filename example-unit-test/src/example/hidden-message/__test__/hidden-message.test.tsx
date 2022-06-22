import { render, fireEvent, screen } from '@testing-library/react';
import { HiddenMessage } from '..';

describe('Test HiddenMessage Component', () => {
  test('Show the children when the checkbox is checked', () => {
    const testMessage = 'Test message';

    render(<HiddenMessage>{testMessage}</HiddenMessage>);

    // query* functions will return the element or null if it cannot be found
    expect(screen.queryByText(testMessage)).toBeNull();

    // get* functions will return the element or throw an error if it cannot be found
    // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
    fireEvent.click(screen.getByLabelText(/show/i));

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
