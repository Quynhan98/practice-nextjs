import React from 'react'

// Pages
import SearchPage from '@pages/search'

// Utils
import { render } from '@utils/testUtils'

// Mocks
import { LIST_PRODUCT } from '@mocks/mockData'

describe('Search Page render', () => {
  it('Should show match Search Page DOM Snapshot', async () => {
    const { container } = render(
      <SearchPage products={LIST_PRODUCT} error="" paramSearch="Lira" />,
    )

    expect(container).toMatchSnapshot()
  })
})
