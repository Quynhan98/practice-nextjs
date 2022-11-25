import { memo } from 'react'
import { Box, BoxProps, ListItem, UnorderedList } from '@chakra-ui/react'
import Link from 'next/link'

type NavType = {
  value: number
  name: string
  href: string
}

interface NavBarProps extends BoxProps {
  navList: NavType[]
}

const NavBar = ({ navList, ...rest }: NavBarProps) => {
  return (
    <Box as="nav" {...rest}>
      <UnorderedList
        display="flex"
        flexDirection={{ base: 'column', md: 'unset' }}
        justifyContent={{ base: 'flex-start', md: 'space-between' }}
        fontSize="16px"
        gap={{ base: '8px', md: '41px' }}
        marginLeft="0px"
      >
        {navList.map((obj) => (
          <ListItem
            key={obj.value}
            color="secondary"
            textTransform="uppercase"
            listStyleType="none"
            fontSize={{ base: '12px', md: '16px' }}
            maxW={{ base: '135px', md: '100%' }}
          >
            <Link href={obj.href}>{obj.name}</Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default memo(NavBar)
