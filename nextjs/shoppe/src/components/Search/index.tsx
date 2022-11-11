import { ChangeEvent } from 'react'
import { Box, IconButton, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export interface ISearchProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  placeholder: string
}

const Search = ({
  onChange,
  onKeyDown,
  onClick,
  placeholder,
}: ISearchProps) => {
  return (
    <Box
      borderBottom="1px"
      borderBottomColor="lightSilver"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
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
      />
      <IconButton
        size="small"
        marginBottom="10px"
        type="submit"
        onClick={onClick}
        aria-label="Search database"
        icon={<SearchIcon boxSize={5} />}
      />
    </Box>
  )
}

export default Search
