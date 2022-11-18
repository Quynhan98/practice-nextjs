import React from 'react'

// component
import Icon from '@components/Icon'

// Utils
import { render, screen } from '@utils/testUtils'

describe('Icon render', () => {
  const props = {
    alt: 'facebook',
    srcIcon: '/images/facebook.svg',
  }

  it('Should show match Icon DOM Snapshot', () => {
    const { container } = render(<Icon {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('Should image has the correct src', () => {
    render(<Icon {...props} />)

    const image = screen.getByTestId('image')

    expect(image.getAttribute('src')).toEqual(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${props.srcIcon}?w=3840&q=75`,
    )
  })
})
