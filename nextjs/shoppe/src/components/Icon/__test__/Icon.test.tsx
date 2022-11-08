import React from 'react'

// component
import Icon from '@components/Icon'

// Utils
import { render } from '@utils/testUtils'

describe('Icon render', () => {
  it('Should show match Icon DOM Snapshot', () => {
    const props = {
      alt: 'facebook',
      srcIcon: '/images/facebook.svg',
    }
    const component = render(<Icon {...props} />)
    expect(component).toMatchSnapshot()
  })
})
