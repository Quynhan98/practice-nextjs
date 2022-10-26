import { styled, TextField } from '@mui/material'

// Types
import { IInputProps } from '@components/Input'

export const InputStyled = styled(TextField)<IInputProps>`
  background-color: transparent;
  margin-bottom: 10px;

  &.MuiTextField-root {
    position: relative;
    width: 100%;
    ${({ mbottom }) => `margin-bottom: ${mbottom}px`};
  }

  &::after {
    position: absolute;
    top: 32px;

    display: ${({ displayline }) => displayline || 'block'};
    content: '';
    width: 15%;
    min-width: 60px;
    border-top: 4px solid
      ${({ error, theme }) =>
        (error && theme.palette.error.dark) || theme.palette.primary.main};
    border-right: 4px solid transparent;
  }
`
