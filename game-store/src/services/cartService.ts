import { axiosInstance } from '@utils/api'
import { TCart } from '@contexts/CartProvider'

export const addGameToCart = (data: TCart) => {
  return axiosInstance.post('/cart', data)
}

export const updateGameToCart = (data: TCart, id: string) => {
  if (id) {
    return axiosInstance.put(`/cart/${id}`, {
      ...data,
    })
  }
  return false
}

export const clearAllCart = (data: TCart, id: string) => {
  if (id) {
    return axiosInstance.put(`/cart/${id}`, {
      ...data,
      games: [],
    })
  }

  return false
}
