import { CardActions, CardContent, styled } from '@mui/material'

export const CardContentStyled = styled(CardContent)`
  max-height: 230px;
  overflow-y: scroll;
`

export const CardActionsStyled = styled(CardActions)`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.palette.common.white};
`
