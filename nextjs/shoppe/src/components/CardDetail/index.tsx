import { memo, useCallback, useState } from 'react'
import Image, { ImageLoader } from 'next/image'
import {
  Button,
  Center,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'

// Utils
import { currencyFormat, shimmer, toBase64 } from '@utils/index'

// Types
import { IProductDetail } from '@self-types/index'

// Components
import Quantity from '@components/Quantity'

// Services
import imageLoader from '@services/imageLoader'

// Constants
import { BREAKPOINTS } from '@constants/variables'

interface CardDetailProps {
  isAdded?: boolean
  productDetail: IProductDetail
  handleAddCart: (data: IProductDetail) => void
}

const CardDetail = ({
  isAdded,
  productDetail,
  handleAddCart,
}: CardDetailProps) => {
  const { name, price, imageUrl, id, introduction } = productDetail

  const [quantityProduct, setQuantityProduct] = useState<number>(1)
  const [isMobile] = useMediaQuery(BREAKPOINTS.MEDIUM)

  // Handle increment quantity
  const handleIncrementQuantity = useCallback(
    () => setQuantityProduct(quantityProduct + 1),
    [quantityProduct],
  )

  // Handle decrement quantity
  const handleDecrementQuantity = useCallback(() => {
    const value = quantityProduct > 1 ? quantityProduct - 1 : 1
    setQuantityProduct(value)
  }, [quantityProduct])

  // Handle Click button Add to cart
  const handleClickAddCart = () => {
    const newCart: IProductDetail = {
      ...productDetail,
      quantity: quantityProduct,
    }

    handleAddCart(newCart)
  }

  return (
    <Flex
      gap={{ base: '40px', md: '78px' }}
      flexDirection={{ base: 'column', md: 'unset' }}
      maxW="1248px"
    >
      <Center>
        <Image
          width={isMobile ? 288 : 560}
          height={isMobile ? 374 : 600}
          src={imageUrl}
          alt={name}
          loader={imageLoader as ImageLoader}
          priority
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(560, 600),
          )}`}
        />
      </Center>
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
            isDisabled={isAdded}
            onClick={handleClickAddCart}
            size={isMobile ? 'full' : 'default'}
            variant={isMobile ? 'small' : 'primary'}
          >
            {isAdded ? 'Added to cart' : 'Add to cart'}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default memo(CardDetail)
