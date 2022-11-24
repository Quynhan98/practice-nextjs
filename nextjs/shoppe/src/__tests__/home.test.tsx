import React from 'react'

// Pages
import Home, { getStaticProps } from '@pages/products'

// Utils
import { render } from '@utils/testUtils'

// Mocks
import { MOCKED_PRODUCTS } from '@mocks/mockData'

jest.mock('@services/index', () => {
  const { LIST_PRODUCT } = require('@mocks/mockData')

  return {
    fetcherApi: jest.fn().mockResolvedValue(LIST_PRODUCT),
  }
})

describe('Home render', () => {
  it('Should show match Home DOM Snapshot', async () => {
    const { container } = render(<Home products={MOCKED_PRODUCTS} error="" />)

    expect(container).toMatchSnapshot()
  })

  it('Should getStaticProps return data correctly ', async () => {
    const mockedStaticProps = {
      props: {
        products: MOCKED_PRODUCTS,
      },
    }

    const value = await getStaticProps({})
    expect(value).toEqual(mockedStaticProps)

    jest.resetAllMocks()
  })
})
