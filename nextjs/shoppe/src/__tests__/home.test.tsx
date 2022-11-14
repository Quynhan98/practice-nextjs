import React from 'react'

// Pages
import Home from '@pages/products'

// Utils
import { render } from '@utils/testUtils'

// Utils
import { NextRouterProvider } from '@utils/nextRouterProvider'

// Mocks
import { LIST_PRODUCT } from '@mocks/mockData'

const query = { search: 'value search' }

describe('Home render', () => {
  it('Should show match Home DOM Snapshot', () => {
    const { container } = render(
      <NextRouterProvider router={{ query }}>
        <Home products={LIST_PRODUCT} />
      </NextRouterProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})
