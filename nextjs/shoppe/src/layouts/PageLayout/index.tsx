import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

// Layouts
import Header from '@layouts/Header'
import Footer from '@layouts/Footer'

// Hooks
import { useCartContext } from '@hooks/useCartContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Components
import LoadingIndicator from '@components/LoadingIndicator'

interface PageLayoutProps {
  children: ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const { listCart } = useCartContext()
  const { loading } = useLoadingContext()

  return (
    <>
      <Head>
        <title>Shoppe</title>
        <meta name="title" content="Shoppe" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Header carts={listCart} />
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
      <Footer />
      {loading && <LoadingIndicator size="lg" />}
    </>
  )
}

export default PageLayout
