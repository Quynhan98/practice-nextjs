import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SWRConfig } from 'swr'

// Themes
import { customTheme } from '@themes/index'

// Layouts
import PageLayout from '@layouts/PageLayout'

// Services
import { fetcherApi } from '@services/index'

// Components
import { ErrorBoundary } from '@components/ErrorBoundary'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetcherApi,
      }}
    >
      <ChakraProvider theme={customTheme}>
        <ErrorBoundary>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ErrorBoundary>
      </ChakraProvider>
    </SWRConfig>
  )
}
