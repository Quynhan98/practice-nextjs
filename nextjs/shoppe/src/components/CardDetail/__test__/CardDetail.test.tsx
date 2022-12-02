// Mocks
import { PRODUCT_DETAIL } from '@mocks/mockData'

// Utils
import { fireEvent, render, screen } from '@utils/testUtils'

// Components
import CardDetail from '@components/CardDetail'

describe('CardDetail render', () => {
  const mockProps = {
    handleAddCart: jest.fn(),
    isAdded: false,
    ...PRODUCT_DETAIL,
  }
  it('Should match data for card component', () => {
    const { container } = render(<CardDetail {...mockProps} />)

    expect(container).toMatchSnapshot()
  })

  it('Should click button add', () => {
    render(<CardDetail {...mockProps} />)

    const buttonAddCart = screen.getByRole('button', {
      name: /add to cart/i,
    })

    fireEvent.click(buttonAddCart)
    expect(mockProps.handleAddCart).toBeCalled()
  })

  it('Should render button in added to cart', () => {
    render(<CardDetail {...mockProps} isAdded />)

    const buttonAddCart = screen.getByRole('button', {
      name: /added to cart/i,
    })

    expect(buttonAddCart).toHaveTextContent('Added to cart')
  })

  it('Should click increase and decrease the quantity', () => {
    render(<CardDetail {...mockProps} />)

    const increaseButton = screen.getByTestId('increase-button')
    const decreaseButton = screen.getByTestId('decrement-button')

    // Test increase quantity
    fireEvent.click(increaseButton)
    expect(screen.getByTestId('quantity').textContent).toBe('2')

    // Test decrease quantity
    fireEvent.click(decreaseButton)
    expect(screen.getByTestId('quantity').textContent).toBe('1')
  })

  it('Should click reduce the number should not be less than 1', () => {
    render(<CardDetail {...mockProps} />)

    const decreaseButton = screen.getByTestId('decrement-button')

    fireEvent.click(decreaseButton)
    expect(screen.getByTestId('quantity').textContent).toBe('1')
  })
})
