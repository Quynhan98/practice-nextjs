import React from 'react'

// component
import Icon from '@components/Icon'

// Utils
import { render } from '@utils/testUtils'

describe('Icon render', () => {
  const props = {
    alt: 'facebook',
    srcIcon: '/images/facebook.webp',
  }

  it('Should show match Icon DOM Snapshot', () => {
    const { container } = render(<Icon {...props} />)
    expect(container).toMatchSnapshot()
  })
})
