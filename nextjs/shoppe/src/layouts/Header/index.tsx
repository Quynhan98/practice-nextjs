import { memo, useMemo } from 'react'
import Link from 'next/link'
import Image, { ImageLoader } from 'next/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

// Components
import Icon from '@components/Icon'

// Services
import imageLoader from '@services/imageLoader'

// Types
import { IProductDetail } from '@self-types/index'
import { shimmer, toBase64 } from '@utils/index'

interface HeaderProps {
  carts: IProductDetail[]
}
const Header = ({ carts }: HeaderProps) => {
  const quantity = useMemo(() => {
    return carts.length
  }, [carts.length])

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
            loader={imageLoader as ImageLoader}
            width={125}
            height={40}
            src="/images/logo.png"
            alt="Logo Shoppe"
            style={{ width: 'auto', height: 'auto' }}
            priority
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(190, 300),
            )}`}
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
