import { memo, useState } from 'react'
import Image, { ImageLoader } from 'next/image'
import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react'

// Utils
import { currencyFormat } from '@utils/index'

// Types
import { IProductDetail } from '@self-types/index'

// Components
import Button from '@components/Button'
import Quantity from '@components/Quantity'

// Services
import myImageLoader from '@services/imageLoader'

// Constants
import { BREAKPOINTS } from '@constants/variables'

interface CardDetailProps {
  productDetail: IProductDetail
  handleAddCart: (data: IProductDetail) => void
}

const CardDetail = ({ productDetail, handleAddCart }: CardDetailProps) => {
  const { name, price, imageUrl, id, introduction } = productDetail

  const [quantityProduct, setQuantityProduct] = useState<number>(1)
  const [isMobile] = useMediaQuery(BREAKPOINTS.MEDIUM)

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
    <Box display="flex" justifyContent="space-between" maxW="1248px">
      <Box
        display="flex"
        gap={{ base: '40px', md: '78px' }}
        flexDirection={{ base: 'column', md: 'unset' }}
        margin="0 auto"
      >
        <Image
          width={isMobile ? 288 : 560}
          height={isMobile ? 374 : 600}
          src={imageUrl}
          alt={name}
          loader={myImageLoader as ImageLoader}
          priority
          style={{ width: 'auto', height: 'auto' }}
        />
        <Flex h="full" direction="column">
          <Heading
            as="h2"
            fontSize="26px"
            fontWeight="base"
            textColor="dark"
            data-testid={`link-to-detail-page/${id}`}
          >
            {name}
          </Heading>
          <Text
            fontSize="20px"
            mt={{ base: '10px', md: '24px' }}
            textColor="beaver"
          >
            {currencyFormat(price)}
          </Text>
          <Text
            fontSize={{ base: 'extraSmall', md: 'base' }}
            mt={{ base: '16px', md: '46px' }}
            textAlign="justify"
            minW="288px"
            maxW="630px"
          >
            {introduction}
          </Text>
          <Flex
            flexDirection={{ base: 'column', md: 'unset' }}
            mt={{ base: '24px', md: '75px' }}
            gap="58px"
          >
            {!isMobile && (
              <Quantity
                onIncreaseCartQuantity={handleIncrementQuantity}
                onDecrementCartQuantity={handleDecrementQuantity}
                quantity={quantityProduct}
              />
            )}
            <Button
              onClick={handleClickAddCart}
              size={isMobile ? 'full' : 'default'}
              variant={isMobile ? 'small' : 'primary'}
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
