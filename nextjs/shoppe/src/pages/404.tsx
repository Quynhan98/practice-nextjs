import Link from 'next/link'
import { Box, Text } from '@chakra-ui/react'

// Constants
import { API_ERROR_NOT_FOUND } from '@constants/index'

const NotFound = () => (
  <Box
    minH="90vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <Text
      color="warning"
      paddingBottom="50px"
      fontWeight="base"
      fontSize={{ base: 'medium', md: 'large' }}
    >
      {API_ERROR_NOT_FOUND}
    </Text>
    <Link href="/" style={{ fontSize: 'large', color: 'blue' }}>
      Back To Home
    </Link>
  </Box>
)

export default NotFound
