import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'

// Types
import { IProduct } from '@self-types/index'

// Utils
import { currencyFormat } from '@utils/index'

interface CardProductProps {
  product: IProduct
}

const CardProduct = ({ product }: CardProductProps) => {
  const { imageUrl, status, name, price, id } = product
  return (
    <Box maxW="sm" borderRadius="lg" overflow="hidden" position="relative">
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
      <Link href={`/products/${id}`} passHref key={id}>
        <a>
          <Image width={300} height={300} src={imageUrl} alt={name} />
        </a>
      </Link>
      <Box pt="24px">
        <Link href={`/products/${id}`} passHref>
          <Text
            as="a"
            fontSize="20px"
            textColor="dark"
            data-testid={`link-to-detail-page/${id}`}
          >
            {name}
          </Text>
        </Link>
        <Text fontSize="20px" mt="16px" textColor="beaver">
          {currencyFormat(price)}
        </Text>
      </Box>
    </Box>
  )
}

export default memo(CardProduct)
