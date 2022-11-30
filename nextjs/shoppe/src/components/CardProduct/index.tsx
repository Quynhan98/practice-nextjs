import { memo } from 'react'
import Link from 'next/link'
import { Box, Heading, Text, useMediaQuery } from '@chakra-ui/react'

// Types
import { IProduct } from '@self-types/index'

// Utils
import { currencyFormat } from '@utils/index'

// Constants
import { BREAKPOINTS } from '@constants/variables'

// Components
import ImageBlur from '@components/ImageBlur'

const CardProduct = ({ imageUrl, status, name, price, id }: IProduct) => {
  const [isMobile] = useMediaQuery(BREAKPOINTS.MEDIUM)

  return (
    <Box
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
      margin={{ base: '0 auto', md: 'unset' }}
    >
      {status && (
        <Box
          position="absolute"
          top="16px"
          left="16px"
          background="beaver"
          borderRadius="4px"
          textAlign="center"
          padding="3px 6px"
        >
          <Text fontSize="12px" textColor="light">
            {status}
          </Text>
        </Box>
      )}
      <Link href={`/products/${id}`} key={id}>
        <ImageBlur
          width={isMobile ? 136 : 300}
          height={isMobile ? 136 : 300}
          src={imageUrl}
          alt={name}
          priority
        />
      </Link>
      <Box pt={{ base: '10px', md: '24px' }} color="dark" fontSize="medium">
        <Heading
          as="h3"
          fontSize={{ base: 'small', md: 'medium' }}
          fontWeight="base"
          color="dark"
          maxW={{ base: '136px', md: '300px' }}
        >
          <Link href={`/products/${id}`} prefetch={false}>
            {name}
          </Link>
        </Heading>
        <Text mt="16px" textColor="beaver">
          {currencyFormat(price)}
        </Text>
      </Box>
    </Box>
  )
}

export default memo(CardProduct)
