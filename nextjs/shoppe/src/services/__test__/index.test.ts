// Services
import { fetcherApi } from '@services/index'

const unmockedFetch = global.fetch

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({ json: () => Promise.resolve([]) }) as Promise<Response>
})

afterAll(() => {
  global.fetch = unmockedFetch
})

describe('fetch user information correctly', () => {
  it('should call fetch', async () => {
    const data = await fetcherApi('/products')

    expect(Array.isArray(data)).toEqual(true)
    expect(data.length).toEqual(0)
  })
})
