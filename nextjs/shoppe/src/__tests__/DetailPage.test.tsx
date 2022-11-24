import React from 'react'

// Pages
import DetailPage, { getStaticProps } from '@pages/products/[id]'

// Utils
import { render, screen } from '@utils/testUtils'

// Mocks
import { MOCK_PRODUCT } from '@mocks/mockData'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

jest.mock('@services/index', () => {
  const { PRODUCT_DETAIL } = require('@mocks/mockData')
  return {
    fetcherApi: jest.fn(() => {
      return PRODUCT_DETAIL
    }),
  }
})

describe('Detail page render', () => {
  it('Should show match Detail page DOM Snapshot', async () => {
    const { container } = render(<DetailPage product={MOCK_PRODUCT} />)

    expect(container).toMatchSnapshot()
  })

  it('Should show match Detail page with error', async () => {
    const { container } = render(<DetailPage error={SERVER_ERROR} />)

    expect(container).toBeInTheDocument()
    expect(screen.getByText(SERVER_ERROR)).toHaveTextContent(SERVER_ERROR)
  })

  it('Should getStaticProps return data correctly ', async () => {
    const mockedStaticProps = {
      props: {
        product: MOCK_PRODUCT,
      },
    }

    const value = await getStaticProps({ params: { id: '1' } })

    expect(value).toEqual(mockedStaticProps)

    jest.resetAllMocks()
  })
})
