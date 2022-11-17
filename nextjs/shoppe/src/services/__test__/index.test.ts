// Constants
import { SERVER_ERROR } from '@constants/index'

// Services
import { fetcherApi } from '@services/index'

// Mocks
import { LIST_PRODUCT } from '@mocks/mockData'

describe('fetch user information correctly', () => {
  const unmockedFetch = global.fetch

  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve(LIST_PRODUCT),
      }) as Promise<Response>
  })

  afterAll(() => {
    global.fetch = unmockedFetch
  })

  it('should call fetch', async () => {
    const data = await fetcherApi('/products')

    expect(Array.isArray(data)).toEqual(true)
    expect(data.length).toEqual(LIST_PRODUCT.length)
  })

  it('should fetch', async () => {
    jest.fn().mockImplementationOnce(() => Promise.reject(SERVER_ERROR))
    let data

    try {
      data = await fetcherApi('/products')
    } catch {
      expect(data).toEqual(SERVER_ERROR)
    }
  })
})
