import { SERVER_ERROR } from '@constants/errorMessage'
import { MOCK_GAME_TRANSFORMED } from '@constants/__mocks__/mockGame'
import { swrFetcher } from '@helpers/fetcher'
import mockAxios from 'axios'

jest.mock('axios')
const mockGetAxios = jest.mocked(mockAxios.get)

/**
 * SWR fetcher
 */
describe('fetch user information correctly', () => {
  it('should call fetch user information function correctly when it resolved', async () => {
    mockGetAxios.mockResolvedValue({
      data: MOCK_GAME_TRANSFORMED,
    })

    const data = await swrFetcher('url')

    expect(data).toEqual(MOCK_GAME_TRANSFORMED)
  })

  it('should call fetch user information function correctly when it rejected', async () => {
    mockGetAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await swrFetcher('url')
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })
})
