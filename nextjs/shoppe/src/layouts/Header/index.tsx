import { memo, useCallback, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Box,
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
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'

// Components
import Icon from '@components/Icon'
import CartItem from '@components/CartItem'
import LoadingIndicator from '@components/LoadingIndicator'

// Hooks
import { useCartContext } from '@hooks/useCartContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Constants
import { SNACKBAR_DELETE_CART_SUCCESS } from '@constants/index'

const Header = () => {
  const { setLoading, loading } = useLoadingContext()
  const { listCart, deleteCart } = useCartContext()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const quantity = useMemo(() => {
    return listCart.length
  }, [listCart.length])

  const handleDeleteCart = useCallback(
    async (id: number) => {
      setLoading(true)

      const updateCarts = listCart.filter((cartItem) => cartItem.id !== id)

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
          <CartItem
            key={`cart-item-${cart.id}`}
            onHandleDeleteCart={handleDeleteCart}
            {...cart}
          />
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
            <Box as="figure" width="130px" height="30px" position="relative">
              <Image
                src="/images/logo.webp"
                alt="Logo Shoppe"
                priority
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </Box>
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
            srcIcon="/images/shoppingCart.webp"
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
      {loading && <LoadingIndicator size="lg" />}
    </>
  )
}

export default memo(Header)
