import { CartContext, ICartContext } from '@contexts/CartProvider'

// Hooks
import { useCartContext } from '@hooks/useCartContext'

// Mocks
import { CARTS_MOCK } from '@mocks/mockData'

// Utils
import { render, screen } from '@utils/testUtils'

const CartContextTest = () => {
  const { listCart } = useCartContext()

  return (
    <>
      {listCart.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </>
  )
}

it('use cart context hook return correct name', () => {
  const cartContextProps: ICartContext = {
    listCart: CARTS_MOCK,
    addCart: jest.fn(),
    deleteCart: jest.fn(),
  }

  render(
    <CartContext.Provider value={cartContextProps}>
      <CartContextTest />
    </CartContext.Provider>,
  )

  expect(screen.getAllByRole('heading')[0]).toHaveTextContent(
    CARTS_MOCK[0].name,
  )
})
