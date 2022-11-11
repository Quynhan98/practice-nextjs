import React from 'react'

// Pages
import Home from '@pages/index'

// Utils
import { render } from '@utils/testUtils'

// Utils
import { NextRouterProvider } from '@utils/nextRouterProvider'

const query = { search: 'value search' }

describe('Home render', () => {
  it('Should show match Home DOM Snapshot', () => {
    const { container } = render(
      <NextRouterProvider router={{ query }}>
        <Home />
      </NextRouterProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})
