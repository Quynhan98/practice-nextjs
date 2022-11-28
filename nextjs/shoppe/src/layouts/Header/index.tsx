import { memo, useCallback, useMemo } from 'react'
import Link from 'next/link'
import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

// Components
import Icon from '@components/Icon'
import ImageBlur from '@components/ImageBlur'

// Hooks
import { useCartContext } from '@hooks/useCartContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Utils
import { currencyFormat } from '@utils/index'

// Types
import { IProductDetail } from '@self-types/index'

// Constants
import { SNACKBAR_DELETE_CART_SUCCESS } from '@constants/index'

const Header = () => {
  const { setLoading } = useLoadingContext()
  const { listCart, deleteCart } = useCartContext()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const quantity = useMemo(() => {
    return listCart.length
  }, [listCart.length])

  const handleDeleteCart = useCallback(
    async (cart: IProductDetail) => {
      setLoading(true)

      const updateCarts = listCart.filter((cartItem) => cartItem !== cart)

      const dataCart = await deleteCart(updateCarts)

      if (typeof dataCart === 'string') {
        toast({
          title: 'Error',
          description: dataCart,
          status: 'error',
          isClosable: true,
          position: 'bottom-left',
        })
      } else {
        toast({
          title: 'Success',
          description: SNACKBAR_DELETE_CART_SUCCESS,
          status: 'success',
          isClosable: true,
          position: 'bottom-left',
        })
      }

      setLoading(false)
    },
    [listCart, toast],
  )

  const renderListCart = useMemo(() => {
    return (
      <>
        {listCart.map((cart) => (
          <Flex
            key={`cart-item-${cart.id}`}
            alignItems="center"
            borderRadius="8px"
            backgroundColor="gray"
            justifyContent="space-between"
          >
            <Flex padding="5px 10px" flexDirection="column">
              <Heading as="h3" fontSize="base" fontWeight="medium" color="dark">
                <Link href={`/products/${cart.id}`} prefetch={false}>
                  {cart.name}
                </Link>
              </Heading>
              <Text color="dark">Quantity: {cart.quantity}</Text>
              <Text textColor="beaver">{currencyFormat(cart.price)}</Text>
            </Flex>
            <IconButton
              color="secondary"
              fontSize="x-small"
              onClick={() => handleDeleteCart(cart)}
              type="submit"
              aria-label="delete"
              icon={<CloseIcon />}
            />
          </Flex>
        ))}
      </>
    )
  }, [listCart])

  return (
    <>
      <Flex
        as="header"
        borderBottom="1px"
        borderBottomColor="lightSilver"
        justifyContent="space-between"
        alignItems="center"
        paddingBottom="5px"
        maxWidth="1248px"
        margin={{ base: ' 0px 16px', lg: '0 auto' }}
        pt={{ base: '26px', lg: '67px' }}
      >
        <Heading as="h1">
          <Link href="/">
            <ImageBlur
              width={125}
              height={40}
              src="/images/logo.png"
              alt="Logo Shoppe"
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
        </Heading>
        <Button
          width="53px"
          height="30px"
          onClick={onOpen}
          position="relative"
          marginRight="50px"
          alignItems="flex-end"
        >
          <Icon
            width="21px"
            height="20px"
            srcIcon="/images/shoppingCart.svg"
            alt="Shopping Cart Icon"
          />
          <Center
            bottom="14px"
            left="30px"
            w="20px"
            height="20px"
            position="absolute"
            background="warning"
            borderRadius="4px"
          >
            <Text size="small" color="gray">
              {quantity || 0}
            </Text>
          </Center>
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottom="1px" borderBottomColor="lightSilver">
            Shopping bag
          </DrawerHeader>
          <DrawerBody display="flex" flexDirection="column" gap="20px">
            {renderListCart}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default memo(Header)
