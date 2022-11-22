import React from 'react'

// Pages
import DetailPage from '@pages/products/[id]'

// Utils
import { render } from '@utils/testUtils'

// Mocks
import { PRODUCT_DETAIL } from '@mocks/mockData'
import { SERVER_ERROR } from '@constants/errorMessage'

describe('Detail page render', () => {
  it('Should show match Detail page DOM Snapshot', async () => {
    const { container } = render(<DetailPage product={PRODUCT_DETAIL} />)

    expect(container).toMatchSnapshot()
  })

  it('Should show match document Detail page', async () => {
    const { container } = render(<DetailPage error={SERVER_ERROR} />)

    expect(container).toBeInTheDocument()
  })
})
