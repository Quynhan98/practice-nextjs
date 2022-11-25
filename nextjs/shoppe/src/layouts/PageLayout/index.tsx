import { SWRConfig } from 'swr'
import Head from 'next/head'
import { Box, ChakraProvider, Spinner } from '@chakra-ui/react'
import { lazy, ReactNode, Suspense } from 'react'

// Layouts
import Header from '@layouts/Header'

// Hooks
import { useLoadingContext } from '@hooks/useLoadingContext'

// Components
import LoadingIndicator from '@components/LoadingIndicator'

// Services
import { fetcherApi } from '@services/index'

// theme
import { customTheme } from '@themes/index'

// Contexts
import { LoadingProvider } from '@contexts/LoadingProvider'
import { CartProvider } from '@contexts/CartProvider'

const Footer = lazy(() => import('@layouts/Footer'))

interface PageLayoutProps {
  children: ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const { loading } = useLoadingContext()

  return (
    <>
      <Head>
        <title>Shoppe</title>
        <meta name="title" content="Shoppe" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <SWRConfig
        value={{
          fetcher: fetcherApi,
        }}
      >
        <ChakraProvider theme={customTheme}>
          <LoadingProvider>
            <CartProvider>
              <Header />
              <Box
                as="main"
                minHeight="100vh"
                maxWidth="1248px"
                width="100%"
                margin="0 auto"
                padding={{ base: '16px', lg: '0px' }}
              >
                {children}
              </Box>
              <Suspense fallback={<Spinner />}>
                <Footer />
              </Suspense>
              {loading && <LoadingIndicator size="lg" />}
            </CartProvider>
          </LoadingProvider>
        </ChakraProvider>
      </SWRConfig>
    </>
  )
}

export default PageLayout
