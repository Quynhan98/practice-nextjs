import { BASE_URL, SERVER_ERROR } from '@constants/index'

// Fetcher
export const fetcherApi = async (url: string) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`)

    return response.json()
  } catch {
    throw SERVER_ERROR
  }
}
