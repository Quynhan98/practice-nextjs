import { memo } from 'react'
import Link from 'next/link'
import Image, { ImageLoader } from 'next/image'
import { Box, Text } from '@chakra-ui/react'

// Types
import { IProduct } from '@self-types/index'

// Utils
import { currencyFormat } from '@utils/index'

// Services
import myImageLoader from '@services/imageLoader'

interface CardProductProps {
  product: IProduct
}

const CardProduct = ({ product }: CardProductProps) => {
  const { imageUrl, status, name, price, id } = product
  return (
    <Box maxW="sm" borderRadius="lg" overflow="hidden" position="relative">
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
          width={300}
          height={300}
          src={imageUrl}
          alt={name}
          loader={myImageLoader as ImageLoader}
        />
      </Link>
      <Box pt="24px" color="dark" fontSize="medium">
        <Link href={`/products/${id}`}>{name}</Link>
        <Text mt="16px" textColor="beaver">
          {currencyFormat(price)}
        </Text>
      </Box>
    </Box>
  )
}

export default memo(CardProduct)
