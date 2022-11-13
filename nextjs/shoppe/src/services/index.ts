import { SERVER_ERROR } from '@constants/index'

// Fetcher
export const swrFetcher = async (url: string) => {
  try {
    const response = await fetch(url)

    return response.json()
  } catch {
    throw SERVER_ERROR
  }
}
