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

export const addToCart = async <T>(requestData: T, url: string): Promise<T> => {
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  }

  try {
    const response = await fetch(`${BASE_URL}${url}`, config)
    return response.json()
  } catch (error) {
    throw SERVER_ERROR
  }
}

export const updateData = async <T>(
  id: number,
  url: string,
  data: T,
): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    return response.json()
  } catch (error) {
    throw SERVER_ERROR
  }
}
