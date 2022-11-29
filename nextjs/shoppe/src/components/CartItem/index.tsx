import { memo } from 'react'
import Link from 'next/link'
import { CloseIcon } from '@chakra-ui/icons'
import { Flex, Heading, IconButton, Text } from '@chakra-ui/react'

// Types
import { IProductDetail } from '@self-types/index'

// Utils
import { currencyFormat } from '@utils/index'

interface CartItemProps extends IProductDetail {
  onHandleDeleteCart: (id: number) => void
}

const CartItem = ({
  id,
  name,
  quantity,
  price,
  onHandleDeleteCart,
}: CartItemProps) => {
  return (
    <Flex
      key={`cart-item-${id}`}
      alignItems="center"
      borderRadius="8px"
      backgroundColor="gray"
      justifyContent="space-between"
    >
      <Flex padding="5px 10px" flexDirection="column">
        <Heading as="h3" fontSize="base" fontWeight="medium" color="dark">
          <Link href={`/products/${id}`} prefetch={false}>
            {name}
          </Link>
        </Heading>
        <Text color="dark">Quantity: {quantity}</Text>
        <Text textColor="beaver">{currencyFormat(price)}</Text>
      </Flex>
      <IconButton
        color="secondary"
        fontSize="x-small"
        onClick={() => onHandleDeleteCart(id)}
        type="submit"
        aria-label="delete"
        icon={<CloseIcon />}
      />
    </Flex>
  )
}

export default memo(CartItem)
