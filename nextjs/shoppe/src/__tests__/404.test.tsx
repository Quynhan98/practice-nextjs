import React from 'react'

// component
import NotFound from '@pages/404'
import { render, screen } from '@utils/testUtils'

describe('NotFound render', () => {
  it('Should show match NotFound DOM Snapshot', () => {
    const { container } = render(<NotFound />)

    expect(container).toMatchSnapshot()
  })

  it('Should navigate to home page', () => {
    render(<NotFound />)

    const link = screen.getByRole('link', {
      name: /back to home/i,
    })

    expect(link.getAttribute('href')).toEqual('/')
  })
})
