import '../../styles/reset.css'
import '../../styles/globals.css'

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SWRConfig } from 'swr'

// Themes
import { customTheme } from '@themes/index'

// Layouts
import PageLayout from '@layouts/PageLayout'

// Services
import { fetcherApi } from '@services/index'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetcherApi,
      }}
    >
      <ChakraProvider theme={customTheme}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ChakraProvider>
    </SWRConfig>
  )
}
