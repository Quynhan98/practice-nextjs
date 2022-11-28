import { memo, useMemo } from 'react'
import Link from 'next/link'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

// Components
import Icon from '@components/Icon'
import ImageComponent from '@components/Image'

// Hooks
import { useCartContext } from '@hooks/useCartContext'

const Header = () => {
  const { listCart } = useCartContext()

  const quantity = useMemo(() => {
    return listCart.length
  }, [listCart.length])

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
          <ImageComponent
            width={125}
            height={40}
            src="/images/logo.png"
            alt="Logo Shoppe"
            priority
            style={{ width: 'auto', height: 'auto' }}
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
            {quantity || 0}
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}

export default memo(Header)
