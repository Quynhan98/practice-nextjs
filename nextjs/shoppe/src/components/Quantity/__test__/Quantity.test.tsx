// Component
import Quantity from '@components/Quantity'

// Utils
import { fireEvent, render, screen } from '@utils/testUtils'

describe('Quantity render', () => {
  const mockProps = {
    quality: 1,
    onIncreaseCartQuantity: jest.fn(),
    onDecrementCartQuantity: jest.fn(),
  }
  it('Should show match Quantity DOM Snapshot', () => {
    const { container } = render(<Quantity {...mockProps} />)
    expect(container).toMatchSnapshot()
  })

  it('Should simulate onIncrease Cart Quantity event and expect mock function', () => {
    render(<Quantity {...mockProps} />)
    const increaseButton = screen.getAllByRole('button')[0]
    expect(increaseButton).toBeTruthy()

    fireEvent.click(increaseButton)
    expect(mockProps.onIncreaseCartQuantity).toBeCalled()
  })

  it('Should simulate onDecrease Cart Quantity event and expect mock function', () => {
    render(<Quantity {...mockProps} />)
    const decreaseButton = screen.getAllByRole('button')[1]
    expect(decreaseButton).toBeTruthy()

    fireEvent.click(decreaseButton)
    expect(mockProps.onDecrementCartQuantity).toBeCalled()
  })
})
