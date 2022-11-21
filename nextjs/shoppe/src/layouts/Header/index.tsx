import { useMemo } from 'react'
import Link from 'next/link'
import Image, { ImageLoader } from 'next/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

// Components
import Icon from '@components/Icon'

// Services
import myImageLoader from '@services/imageLoader'

// Hooks
import { useCartContext } from '@hooks/useCartContext'

const Header = () => {
  const { listCart } = useCartContext()

  const quantity = useMemo(() => {
    return listCart.length
  }, [listCart])

  return (
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
          <Image
            width={125}
            height={40}
            src="/images/logo.png"
            alt="Logo Shoppe"
            loader={myImageLoader as ImageLoader}
          />
        </Link>
      </Heading>
      <Box position="relative">
        <Icon
          width="21px"
          height="20px"
          marginRight="60px"
          srcIcon="/images/shoppingCart.svg"
          alt="Shopping Cart Icon"
        />
        <Flex
          bottom="14px"
          left="15px"
          w="20px"
          height="20px"
          position="absolute"
          background="warning"
          borderRadius="4px"
          alignItems="center"
          justifyContent="center"
        >
          <Text size="small" color="gray">
            {quantity}
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
