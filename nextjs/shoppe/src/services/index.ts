import { BASE_URL, SERVER_ERROR } from '@constants/index'
import axios from 'axios'

// Create instance and define base url
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// Fetcher
export const swrFetcher = async (url: string) => {
  try {
    const response = await axiosInstance.get(url)

    return response.data
  } catch {
    throw SERVER_ERROR
  }
}
