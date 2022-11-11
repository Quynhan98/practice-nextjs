import React from 'react'

// Pages
import Home from '@pages/index'

// Utils
import { render } from '@utils/testUtils'

describe('Home render', () => {
  it('Should show match Home DOM Snapshot', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })
})
