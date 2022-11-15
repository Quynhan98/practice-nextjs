import { memo, useState } from 'react'
import Image, { ImageLoader } from 'next/image'
import Link from 'next/link'
import { Box, Flex, Text } from '@chakra-ui/react'

// Utils
import { currencyFormat } from '@utils/index'

// Types
import { IProductDetail } from '@self-types/index'

// Components
import Button from '@components/Button'
import Quantity from '@components/Quantity'

// Services
import myImageLoader from '@services/imageLoader'

interface CardDetailProps {
  productDetail: IProductDetail
  handleAddCart: (data: IProductDetail) => void
}

const CardDetail = ({ productDetail, handleAddCart }: CardDetailProps) => {
  const { name, price, imageUrl, id, introduction } = productDetail

  const [quantityProduct, setQuantityProduct] = useState<number>(1)

  // Handle increment quantity
  const handleIncrementQuantity = () => setQuantityProduct(quantityProduct + 1)

  // Handle decrement quantity
  const handleDecrementQuantity = () => {
    const value = quantityProduct > 1 ? quantityProduct - 1 : 1
    setQuantityProduct(value)
  }

  // Handle Click button Add to cart
  const handleClickAddCart = () => {
    const newCart: IProductDetail = {
      ...productDetail,
      quantity: quantityProduct,
    }

    handleAddCart(newCart)
  }

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      height="600px"
      maxW="1248px"
    >
      <Box display="flex" gap="78px">
        <Image
          width={560}
          height={600}
          src={imageUrl}
          alt={name}
          loader={myImageLoader as ImageLoader}
        />
        <Flex h="full" direction="column">
          <Link href={`/products/${id}`} passHref>
            <Text
              as="h2"
              fontSize="26px"
              textColor="dark"
              data-testid={`link-to-detail-page/${id}`}
            >
              {name}
            </Text>
          </Link>
          <Text fontSize="20px" mt="24px" textColor="beaver">
            {currencyFormat(price)}
          </Text>
          <Text
            fontSize="16px"
            mt="46px"
            textColor="secondary"
            textAlign="justify"
          >
            {introduction}
          </Text>
          <Flex mt="75px" gap="58px">
            <Quantity
              onIncreaseCartQuantity={handleIncrementQuantity}
              onDecrementCartQuantity={handleDecrementQuantity}
              quantity={quantityProduct}
            />
            <Button
              onClick={handleClickAddCart}
              variant="primary"
              size="default"
            >
              ADD TO CART
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default memo(CardDetail)
