import React from 'react'

// Pages
import Home from '@pages/products'

// Utils
import { fireEvent, render, screen } from '@utils/testUtils'

// Utils
import { NextRouterProvider } from '@utils/nextRouterProvider'

// Mocks
import { LIST_PRODUCT } from '@mocks/mockData'

const query = { search: 'value search' }

describe('Home render', () => {
  it('Should show match Home DOM Snapshot', async () => {
    const { container } = render(
      <NextRouterProvider router={{ query }}>
        <Home products={LIST_PRODUCT} />
      </NextRouterProvider>,
    )

    expect(container).toMatchSnapshot()
  })

  it('Should call onChange search', async () => {
    render(
      <NextRouterProvider router={{ query }}>
        <Home products={LIST_PRODUCT} />
      </NextRouterProvider>,
    )

    const search = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.change(search, {
      target: { value: 'Search Value' },
    })

    expect(search.value).toBe('Search Value')
  })
})
