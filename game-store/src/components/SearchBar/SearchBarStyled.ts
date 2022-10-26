import { styled } from '@mui/material'

export const SearchBarStyled = styled('input')`
  font-size: 14px;
  border: none;
  background-color: ${({ theme }) => theme.palette.grey[800]};
  color: ${({ theme }) => theme.palette.common.white};
  border-radius: 8px;
  padding: 12px 15px;
  display: flex;
  justify-content: flex-start;
  min-width: 350px;

  &:focus {
    outline: none;
  }
`
