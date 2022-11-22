// libs
import React from 'react'
import { HtmlContext, HtmlProps } from 'next/dist/shared/lib/html-context'

// component
import Document from '@pages/_document'
import { render } from '@utils/testUtils'

describe('Document render', () => {
  const mockedValue: HtmlProps = {
    __NEXT_DATA__: {
      props: {},
      page: '',
      query: {},
      buildId: '',
    },
    dangerousAsPath: '/',
    docComponentsRendered: {},
    buildManifest: {
      devFiles: [''],
      ampDevFiles: [''],
      polyfillFiles: [''],
      lowPriorityFiles: [''],
      rootMainFiles: [''],
      pages: {
        '/_app': [''],
      },
      ampFirstPages: [''],
    },
    ampPath: '/',
    inAmpMode: false,
    hybridAmp: false,
    isDevelopment: false,
    dynamicImports: [],
    canonicalBase: '',
    headTags: [],
    devOnlyCacheBusterQueryString: '',
    scriptLoader: {},
  }

  it('Should show match Document DOM Snapshot', () => {
    const component = render(
      <HtmlContext.Provider value={mockedValue}>
        <Document />
      </HtmlContext.Provider>,
    )

    expect(component).toMatchSnapshot()
  })
})
