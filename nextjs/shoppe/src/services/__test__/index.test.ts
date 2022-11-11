import mockAxios from 'axios'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

// Mocks
import { PRODUCT_ITEM } from '@mocks/mockData'

// Services
import { swrFetcher } from '@services/index'

const mockGetAxios = jest.mocked(mockAxios.get)

describe('fetch user information correctly', () => {
  it('should call fetch user information function correctly when it resolved', async () => {
    mockGetAxios.mockResolvedValue({
      data: PRODUCT_ITEM,
    })

    const data = await swrFetcher('products/1')

    expect(data).toEqual(PRODUCT_ITEM)
  })

  it('should call fetch user information function correctly when it rejected', async () => {
    mockGetAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await swrFetcher('products/1')
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })
})
