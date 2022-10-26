import { createContext, ReactNode, useCallback, useMemo } from 'react'
import useSWR from 'swr'

// Types
import { Game } from '@self-types/Game.types'
import { AuthContextType } from '@self-types/AuthContext.types'

// Services
import {
  addGameToCart,
  clearAllCart,
  updateGameToCart,
} from '@services/cartService'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'
import { CART_ENDPOINT } from '@constants/endPoints'

export interface ICartContext {
  listCart: Game[]
  addToCart: (game: Game[], idUser: string) => Promise<void>
  deleteItem: (game: Game[], idUser: string) => Promise<void>
  clearAll: (idUser: string) => Promise<void>
}

export type TCart = {
  id: string
  games: Game[]
}

export type TCartContext = {
  children: ReactNode | ReactNode[]
}

export const initCartList: Game[] = []
export const CartContext = createContext<ICartContext | null>(null)

export const CartProvider = ({ children }: TCartContext): JSX.Element => {
  const { userSession } = useAuthContext() as AuthContextType
  const { data: cartItem, mutate } = useSWR<TCart>(
    userSession ? `${CART_ENDPOINT}/${userSession.user.id}` : null,
  )

  const addToCart = useCallback(
    async (games: Game[], idUser: string) => {
      const cart = { id: idUser, games }

      if (idUser) {
        await updateGameToCart(cart, idUser)
      } else {
        await addGameToCart(cart)
      }

      mutate(cartItem)
    },
    [cartItem, mutate],
  )

  const deleteItem = useCallback(
    async (games: Game[], idUser: string) => {
      const cart = { id: idUser, games }

      await updateGameToCart(cart, idUser)

      mutate(cartItem)
    },
    [cartItem, mutate],
  )

  const clearAll = useCallback(
    async (idUser: string) => {
      const cart = { id: idUser, games: [] }

      await clearAllCart(cart, idUser)
      mutate(cartItem)
    },
    [cartItem, mutate],
  )

  const value = useMemo(
    () => ({
      listCart: cartItem?.games || [],
      addToCart,
      deleteItem,
      clearAll,
    }),
    [cartItem?.games, addToCart, deleteItem, clearAll],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
