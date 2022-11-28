import useSWR from 'swr'
import { createContext, ReactNode, useCallback, useMemo } from 'react'

// Types
import { ICart, IProductDetail } from '@self-types/index'

// Services
import { addToCart, updateData } from '@services/index'

export interface ICartContext {
  listCart: IProductDetail[]
  addCart: (products: IProductDetail[]) => Promise<ICart>
  deleteCart: (products: IProductDetail[]) => Promise<ICart>
}

export type TCartContext = {
  children: ReactNode
}

export const initCartList: IProductDetail[] = []
export const CartContext = createContext<ICartContext | null>(null)

export const CartProvider = ({ children }: TCartContext): JSX.Element => {
  const { data: cartItem, mutate } = useSWR<ICart>(`/carts/1`)

  const addCart = useCallback(
    async (products: IProductDetail[]) => {
      const data = await addToCart({ id: 1, products }, `/carts/1`)

      mutate(cartItem)
      return data
    },
    [cartItem, mutate],
  )

  const deleteCart = useCallback(
    async (products: IProductDetail[]) => {
      const data = await updateData(1, '/carts/', { id: 1, products })

      mutate(cartItem)
      return data
    },
    [cartItem, mutate],
  )

  const value = useMemo(
    () => ({
      listCart: cartItem?.products || [],
      addCart,
      deleteCart,
    }),
    [cartItem?.products, addCart, deleteCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
