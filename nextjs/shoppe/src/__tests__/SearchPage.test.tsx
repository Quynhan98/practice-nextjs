import React from 'react'

// Pages
import SearchPage, { getServerSideProps } from '@pages/search'

// Utils
import { render, screen } from '@utils/testUtils'

// Mocks
import { MOCKED_PRODUCTS } from '@mocks/mockData'

// Constants
import { PRODUCT_NOT_FOUND } from '@constants/errorMessage'

jest.mock('@services/index', () => {
  const { LIST_PRODUCT } = require('@mocks/mockData')
  return {
    fetcherApi: jest.fn(() => {
      return LIST_PRODUCT
    }),
  }
})

describe('Search Page render', () => {
  it('Should show match Search Page DOM Snapshot', async () => {
    const { container } = render(
      <SearchPage products={MOCKED_PRODUCTS} paramSearch="Lira" />,
    )

    expect(container).toMatchSnapshot()
  })

  it('Should show match Search Page DOM Snapshot', async () => {
    const { container } = render(
      <SearchPage products={[]} paramSearch="product" />,
    )

    expect(container).toBeInTheDocument()
    expect(screen.getByText(PRODUCT_NOT_FOUND)).toHaveTextContent(
      PRODUCT_NOT_FOUND,
    )
  })

  it('Should getServerSideProps return data correctly ', async () => {
    const mockedProps = {
      props: {
        products: MOCKED_PRODUCTS,
        paramSearch: 'Lira',
      },
    }

    const value = await getServerSideProps({
      query: {
        param: 'Lira',
      },
    })

    expect(value).toEqual(mockedProps)
    jest.resetAllMocks()
  })
})
