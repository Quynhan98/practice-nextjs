import { memo } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
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
    <Box
      as="nav"
      textTransform="uppercase"
      display="flex"
      alignItems="center"
      fontSize="16px"
      gap="41px"
      color="secondary"
      {...rest}
    >
      {navList.map((obj) => (
        <Link href={obj.href} key={obj.value}>
          {obj.name}
        </Link>
      ))}
    </Box>
  )
}

export default memo(NavBar)
