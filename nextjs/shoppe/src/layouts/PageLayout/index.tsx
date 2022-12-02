import Head from 'next/head'
import { Box, Spinner } from '@chakra-ui/react'
import { lazy, ReactNode, Suspense } from 'react'

// Layouts
import Header from '@layouts/Header'

// Contexts
import { CartProvider } from '@contexts/CartProvider'
import { LoadingProvider } from '@contexts/LoadingProvider'

const Footer = lazy(() => import('@layouts/Footer'))

interface PageLayoutProps {
  children: ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Head>
        <title>Shoppe</title>
        <meta name="title" content="Shoppe" />
        <link rel="icon" href="/images/logo.webp" />
      </Head>
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
        </CartProvider>
      </LoadingProvider>
    </>
  )
}

export default PageLayout
