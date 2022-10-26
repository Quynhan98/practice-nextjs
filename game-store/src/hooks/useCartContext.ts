import { useContext } from 'react'

// Contexts
import { CartContext, ICartContext } from '@contexts/CartProvider'

export const useCartContext = (): ICartContext => {
  const cartContext = useContext(CartContext)

  return cartContext!
}
