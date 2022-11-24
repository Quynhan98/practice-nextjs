import { memo } from 'react'
import { Box, BoxProps, useMediaQuery } from '@chakra-ui/react'
import Link from 'next/link'

// Constants
import { BREAKPOINTS } from '@constants/variables'

type NavType = {
  value: number
  name: string
  href: string
}

interface NavBarProps extends BoxProps {
  navList: NavType[]
}

const NavBar = ({ navList, ...rest }: NavBarProps) => {
  const [isMobile] = useMediaQuery(BREAKPOINTS.MEDIUM)

  return (
    <Box
      as="nav"
      textTransform="uppercase"
      display="flex"
      fontSize="16px"
      gap={{ base: '8px', md: '41px' }}
      color="secondary"
      {...rest}
    >
      {navList.map((obj) => (
        <Link
          href={obj.href}
          key={obj.value}
          style={{
            fontSize: isMobile ? '12px' : '16px',
            maxWidth: isMobile ? '135px' : '100%',
          }}
        >
          {obj.name}
        </Link>
      ))}
    </Box>
  )
}

export default memo(NavBar)
