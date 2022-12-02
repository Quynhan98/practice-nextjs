import { memo, useCallback, useState } from 'react'
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'

// Utils
import { currencyFormat } from '@utils/index'

// Types
import { IProductDetail } from '@self-types/index'

// Components
import Quantity from '@components/Quantity'
import ImageBlur from '@components/ImageBlur'

// Constants
import { BREAKPOINTS, STATUS } from '@constants/index'

interface CardDetailProps {
  isAdded?: boolean
  name: string
  price: number
  imageUrl: string
  id: number
  introduction: string
  status?: string
  handleAddCart: (data: IProductDetail) => void
}

const CardDetail = ({
  name,
  price,
  imageUrl,
  id,
  introduction,
  status,
  isAdded,
  handleAddCart,
}: CardDetailProps) => {
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
      name,
      price,
      imageUrl,
      id,
      introduction,
      status,
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
        <Box
          as="figure"
          width={{ base: '350px', md: '560px' }}
          height={{ base: '374px', md: '600px' }}
          position="relative"
        >
          <ImageBlur
            src={imageUrl}
            alt={name}
            priority
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          {status && (
            <Box
              position="absolute"
              top="26px"
              left="26px"
              background="beaver"
              borderRadius="4px"
              textAlign="center"
              padding="3px 6px"
            >
              <Text
                fontSize={{ base: 'extraSmall', md: 'base' }}
                textColor="light"
              >
                {status}
              </Text>
            </Box>
          )}
        </Box>
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
              isDisable={isAdded || status === STATUS.SOLD_OUT}
              onIncreaseCartQuantity={handleIncrementQuantity}
              onDecrementCartQuantity={handleDecrementQuantity}
              quantity={quantityProduct}
            />
          )}
          <Button
            isDisabled={isAdded || status === STATUS.SOLD_OUT}
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
