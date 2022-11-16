import { ChangeEvent, memo, ReactNode } from 'react'
import { Box, Heading, Flex } from '@chakra-ui/react'

// Components
import Search from '@components/Search'

interface BodyContentProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
}
const BodyContent = ({
  onChange,
  onKeyDown,
  onClick,
  children,
}: BodyContentProps) => {
  return (
    <Box pt="96px">
      <Heading as="h2" fontSize="large" fontWeight="medium">
        Shop The Latest
      </Heading>
      <Flex pt="40px" gap="35px" justifyContent="space-between">
        <Box minW="261px">
          <Search
            onChange={onChange}
            onKeyDown={onKeyDown}
            onClick={onClick}
            placeholder="Search..."
          />
        </Box>
        <Flex
          flexDirection="column"
          justifyContent="center"
          paddingBottom="50px"
          margin="0 auto"
        >
          {children}
        </Flex>
      </Flex>
    </Box>
  )
}

export default memo(BodyContent)
