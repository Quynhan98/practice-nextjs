import React from 'react'

// Component
import ImageBlur from '@components/ImageBlur'

// Utils
import { render, screen } from '@utils/testUtils'

describe('Image render', () => {
  const props = {
    src: '/facebook.svg',
    alt: 'facebook',
    width: 200,
    height: 200,
  }
  it('Should show match Image DOM Snapshot', () => {
    const { container } = render(<ImageBlur {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('Should image has the correct src', () => {
    render(<ImageBlur {...props} />)

    const image = screen.getByRole('img')

    expect(image.getAttribute('src')).toEqual(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${props.src}?w=640&q=75`,
    )
  })
})
