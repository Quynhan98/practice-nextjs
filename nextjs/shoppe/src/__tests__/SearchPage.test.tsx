import React from 'react'

// Pages
import SearchPage from '@pages/search'

// Utils
import { fireEvent, render, screen } from '@utils/testUtils'

// Mocks
import { LIST_PRODUCT } from '@mocks/mockData'

describe('Search Page render', () => {
  it('Should show match Search Page DOM Snapshot', async () => {
    const { container } = render(
      <SearchPage products={LIST_PRODUCT} error="" />,
    )

    expect(container).toMatchSnapshot()
  })

  it('Should call onChange search', async () => {
    render(<SearchPage products={LIST_PRODUCT} error="" />)

    const search = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.change(search, {
      target: { value: 'Search Value' },
    })

    expect(search.value).toBe('Search Value')
  })
})
