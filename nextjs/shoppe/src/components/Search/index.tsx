import { ChangeEvent } from 'react'
import { Box, IconButton, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export interface ISearchProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  placeholder: string
  defaultValue?: string
}

const Search = ({
  onChange,
  onKeyDown,
  onClick,
  placeholder,
  defaultValue,
}: ISearchProps) => {
  return (
    <Box
      borderBottom="1px"
      borderRadius={{ base: '4px', md: '0px' }}
      borderBottomColor="lightSilver"
      background={{ base: 'lightSilver', md: 'none' }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection={{ base: 'row-reverse', md: 'unset' }}
    >
      <Input
        type="text"
        padding="0px"
        color="secondary"
        focusBorderColor="none"
        border="none"
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        defaultValue={defaultValue}
      />
      <IconButton
        size="small"
        marginBottom={{ base: '0px', md: '10px' }}
        marginLeft="10px"
        marginRight={{ base: '8px', md: '0px' }}
        type="submit"
        onClick={onClick}
        aria-label="Search database"
        icon={<SearchIcon boxSize={5} />}
      />
    </Box>
  )
}

export default Search
