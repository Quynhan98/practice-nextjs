import { ChangeEvent } from 'react'

// Components
import { Search } from '@mui/icons-material'
import { SearchBarStyled } from '@components/SearchBar/SearchBarStyled'
import { Box, IconButton, useTheme } from '@mui/material'

export interface ISearchBarProps {
  onchange?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  value?: string
  placeholder?: string
}

const SearchBar = ({
  onchange,
  onKeyDown,
  onClick,
  value,
  placeholder,
}: ISearchBarProps) => {
  const theme = useTheme()

  return (
    <Box display="flex" alignItems="center">
      <SearchBarStyled
        type="text"
        onChange={onchange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        value={value}
      />
      <IconButton type="submit" onClick={onClick}>
        <Search sx={{ color: theme.palette.background.paper }} />
      </IconButton>
    </Box>
  )
}

export default SearchBar
