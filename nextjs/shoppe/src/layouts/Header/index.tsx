import Link from 'next/link'
import Image, { ImageLoader } from 'next/image'
import { Flex, Heading } from '@chakra-ui/react'

// Components
import Icon from '@components/Icon'

// Services
import myImageLoader from '@services/imageLoader'

const Header = () => {
  return (
    <Flex
      as="header"
      borderBottom="1px"
      borderBottomColor="lightSilver"
      justifyContent="space-between"
      alignItems="center"
      paddingBottom="5px"
      maxWidth="1248px"
      margin="0 auto"
      pt="67px"
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
      <Icon
        width="21px"
        height="20px"
        marginRight="60px"
        srcIcon="/images/shoppingCart.svg"
        alt="Shopping Cart Icon"
      />
    </Flex>
  )
}

export default Header
