import React from 'react'

// Pages
import DetailPage from '@pages/products/[id]'

// Utils
import { render } from '@utils/testUtils'

// Mocks
import { PRODUCT_DETAIL } from '@mocks/mockData'

describe('Home render', () => {
  it('Should show match Home DOM Snapshot', async () => {
    const { container } = render(
      <DetailPage product={PRODUCT_DETAIL} error="" />,
    )

    expect(container).toMatchSnapshot()
  })
})
