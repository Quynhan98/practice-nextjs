import React from 'react'

// Pages
import Home from '@pages/products'

// Utils
import { render } from '@utils/testUtils'

// Mocks
import { LIST_PRODUCT } from '@mocks/mockData'

describe('Home render', () => {
  it('Should show match Home DOM Snapshot', async () => {
    const { container } = render(<Home products={LIST_PRODUCT} error="" />)

    expect(container).toMatchSnapshot()
  })
})
