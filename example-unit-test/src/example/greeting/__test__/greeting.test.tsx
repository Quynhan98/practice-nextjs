import { render, screen } from '@testing-library/react';
import * as renderer from 'react-test-renderer';
import { Greeting } from '..';

describe('Test Greeting component', () => {
  test('Component Greeting renders Hello World! as a text', () => {
    // Arrange
    render(<Greeting />);

    //Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('Component Greeting should render correctly', () => {
    const component = renderer.create(<Greeting />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
