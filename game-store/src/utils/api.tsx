import axios from 'axios'

// Create instance and define base url
export const axiosInstance = axios.create({
  baseURL: process.env.VITE_API_ENDPOINT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
