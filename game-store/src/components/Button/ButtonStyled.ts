import { Button, styled } from '@mui/material'
import { IButtonProps } from '@components/Button'

export const ButtonStyled = styled(Button)<IButtonProps>`
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.palette.grey[500]};
  &:hover {
    color: ${({ hovercolor, theme }) =>
      hovercolor ? hovercolor : theme.palette.common.white};
  }

  ${({ mbottom }) => `margin-bottom: ${mbottom}px`};
  ${({ mtop }) => `margin-top: ${mtop}px`};
`
