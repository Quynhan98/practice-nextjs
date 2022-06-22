import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '@components/common/button';

describe('Test Button Component', () => {
  const handleClick = jest.fn();

  test('Component Button matchers DOM Snapshot', () => {
    const component = render(
      <Button
        handleClick={handleClick}
        color={'btn-primary'}
        typeButton={'button'}
        size={'btn-small'}
      >
        Button
      </Button>
    );

    expect(component).toMatchSnapshot();
  });

  test('Component Button should render correctly', () => {
    render(
      <Button
        handleClick={handleClick}
        color={'btn-primary'}
        typeButton={'button'}
        size={'btn-small'}
      >
        Button
      </Button>
    );

    expect(screen.getByRole('button')).toHaveTextContent('Button');
  });

  test('Component Button should call handleOnClick function when user click the button', () => {
    render(
      <Button
        handleClick={handleClick}
        color={'btn-primary'}
        typeButton={'button'}
        size={'btn-small'}
      >
        Button
      </Button>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
