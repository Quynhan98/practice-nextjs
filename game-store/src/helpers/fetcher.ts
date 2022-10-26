import { axiosInstance } from '@utils/api'
import { SERVER_ERROR } from '@constants/index'

export const swrFetcher = async (url: string) => {
  try {
    const response = await axiosInstance.get(url)

    return response.data
  } catch {
    throw SERVER_ERROR
  }
}
