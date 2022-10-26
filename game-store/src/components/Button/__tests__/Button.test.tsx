import { cleanup, fireEvent, screen } from '@testing-library/react'

// Utils
import { render } from '@utils/testUtils'

// Components
import Button from '@components/Button'

describe('Button component', () => {
  const handleClick = jest.fn()

  afterEach(() => {
    cleanup()
  })

  const defaultProps = {
    children: 'Button',
    onClick: handleClick,
  }

  it('should render Input', () => {
    const { container } = render(<Button {...defaultProps} />)

    expect(container).toMatchSnapshot()
  })

  it('should call onClick on button ', () => {
    render(<Button {...defaultProps} />)

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(handleClick).toBeCalled()
    expect(handleClick).toBeCalledTimes(1)
  })
})
