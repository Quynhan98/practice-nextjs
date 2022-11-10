import '../../styles/reset.css'
import '../../styles/globals.css'

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

// Themes
import { customTheme } from '@themes/index'

// Layouts
import PageLayout from '@layouts/PageLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ChakraProvider>
  )
}
