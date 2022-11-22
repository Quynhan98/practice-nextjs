// Constants
import { SERVER_ERROR } from '@constants/index'

// Services
import { addToCart, fetcherApi } from '@services/index'

// Mocks
import { CARTS_MOCK, LIST_PRODUCT } from '@mocks/mockData'

describe('Test fetcher function helper', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(LIST_PRODUCT),
    }),
  ) as jest.Mock

  test('Test function fetcher is success', async () => {
    try {
      const response = await fetcherApi('/products')
      const responseData = await response.json()

      if (response) {
        expect(response).toBeCalled()
        expect(responseData.length).toEqual(LIST_PRODUCT.length)
      }
    } catch (error) {
      console.log(error)
    }
  })

  test('Test function fetcher is error', async () => {
    jest.fn().mockImplementationOnce(() => Promise.reject(SERVER_ERROR))

    try {
      const response = await fetcherApi('/products')
      const responseData = await response.json()
      if (response) {
        expect(response).toBeCalled()
        expect(responseData).toEqual(SERVER_ERROR)
      }
    } catch (error) {
      console.log(error)
    }
  })
})

describe('Test add to cart', () => {
  const mockData = { id: 1, products: CARTS_MOCK }

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    }),
  ) as jest.Mock

  it('should call fetch', async () => {
    try {
      const response = await addToCart(mockData, '/carts/1')

      if (response) {
        expect(response).toBeCalled()
        expect(response.products.length).toEqual(CARTS_MOCK.length)
      }
    } catch (error) {
      console.log(error)
    }
  })

  it('should add cart error', async () => {
    jest.fn().mockImplementationOnce(() => Promise.reject(SERVER_ERROR))

    try {
      const response = await addToCart(mockData, '/carts/1')

      if (response) {
        expect(response).toBeCalled()
        expect(response).toEqual(SERVER_ERROR)
      }
    } catch (error) {
      console.log(error)
    }
  })
})
