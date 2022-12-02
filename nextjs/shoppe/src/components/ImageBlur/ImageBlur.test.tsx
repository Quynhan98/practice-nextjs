import React from 'react'

// Component
import ImageBlur from '@components/ImageBlur'

// Utils
import { render } from '@utils/testUtils'

describe('Image render', () => {
  const props = {
    src: '/facebook.webp',
    alt: 'facebook',
    width: 200,
    height: 200,
  }
  it('Should show match Image DOM Snapshot', () => {
    const { container } = render(<ImageBlur {...props} />)
    expect(container).toMatchSnapshot()
  })
})
