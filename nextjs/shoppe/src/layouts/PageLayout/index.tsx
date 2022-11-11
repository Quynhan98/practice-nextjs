import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Header from '@layouts/Header'
import Footer from '@layouts/Footer'

interface PageLayoutProps {
  children: ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <Box
        as="main"
        minHeight="100vh"
        maxWidth="1248px"
        width="100%"
        margin="0 auto"
      >
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default PageLayout
