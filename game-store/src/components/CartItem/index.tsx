// Components
import { Box, Card, IconButton, Typography, useTheme } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

// Types
import { Game } from '@self-types/Game.types'

export interface ICartItemProps {
  game: Game
  handleDelete: (game: Game) => void
}

const CartItem = ({ game, handleDelete }: ICartItemProps) => {
  const theme = useTheme()

  return (
    <Card
      sx={{
        maxWidth: 390,
        minWidth: 315,
        backgroundColor: theme.palette.grey[800],
        padding: 2,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        width: '100%',
      }}
    >
      <Typography
        color={theme.palette.grey[300]}
        fontWeight={600}
        fontSize={15}
        width="70%"
      >
        {game.name}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        gap={1}
        width="30%"
      >
        <Typography color={theme.palette.grey[400]} fontSize={15}>
          ${game.price}
        </Typography>
        <IconButton onClick={() => handleDelete(game as Game)}>
          <CloseIcon
            sx={{ color: theme.palette.common.white }}
            fontSize="small"
          />
        </IconButton>
      </Box>
    </Card>
  )
}

export default CartItem
