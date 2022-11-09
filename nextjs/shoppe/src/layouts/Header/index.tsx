import Link from 'next/link'
import Image from 'next/image'
import { Text, Flex } from '@chakra-ui/react'

// Components
import Icon from '@components/Icon'

const Header = () => {
  return (
    <Flex
      as="header"
      borderBottom="1px"
      borderBottomColor="lightSilver"
      justifyContent="space-between"
      alignItems="center"
      paddingBottom="5px"
    >
      <Text as="h1">
        <Link href="/" passHref>
          <Text as="a">
            <Image
              width={125}
              height={40}
              src="/images/logo.png"
              alt="Logo Shoppe"
            />
          </Text>
        </Link>
      </Text>
      <Icon
        marginRight="60px"
        srcIcon="/images/shoppingCart.svg"
        alt="Shopping Cart Icon"
      />
    </Flex>
  )
}

export default Header
