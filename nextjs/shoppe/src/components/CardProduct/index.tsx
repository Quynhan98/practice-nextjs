import { memo } from 'react'
import Link from 'next/link'
import Image, { ImageLoader } from 'next/image'
import { Box, Heading, Text, useMediaQuery } from '@chakra-ui/react'

// Types
import { IProduct } from '@self-types/index'

// Utils
import { currencyFormat, shimmer, toBase64 } from '@utils/index'

// Services
import imageLoader from '@services/imageLoader'

// Constants
import { BREAKPOINTS } from '@constants/variables'

interface CardProductProps {
  product: IProduct
}

const CardProduct = ({ product }: CardProductProps) => {
  const { imageUrl, status, name, price, id } = product
  const [isMobile] = useMediaQuery(BREAKPOINTS.MEDIUM)

  return (
    <Box
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
      margin="0 auto"
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
        <Image
          width={isMobile ? 136 : 300}
          height={isMobile ? 136 : 300}
          src={imageUrl}
          alt={name}
          loader={imageLoader as ImageLoader}
          priority
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(190, 300),
          )}`}
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
          <Link href={`/products/${id}`}>{name}</Link>
        </Heading>
        <Text mt="16px" textColor="beaver">
          {currencyFormat(price)}
        </Text>
      </Box>
    </Box>
  )
}

export default memo(CardProduct)
