import React from 'react'
import { NextPage } from 'next'
import { Router } from 'next/router'

// Pages
import App from '@pages/_app'

// Utils
import { render } from '@utils/testUtils'

describe('App render', () => {
  const mockedPageProps = {}
  const mockComponent: NextPage = () => <div>Mocked Test Component</div>
  const mockRouterFunction = jest.fn()

  it('Should show match App DOM Snapshot', () => {
    const component = render(
      <App
        pageProps={mockedPageProps}
        Component={mockComponent}
        router={mockRouterFunction as unknown as Router}
      />,
    )

    expect(component).toMatchSnapshot()
  })
})
