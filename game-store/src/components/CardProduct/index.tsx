import { Link } from 'react-router-dom'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  SvgIcon,
  Typography,
  useTheme,
} from '@mui/material'
import {
  RiGlobalLine,
  RiWindowsFill,
  RiAndroidFill,
  RiPlaystationFill,
  RiXboxFill,
  RiAppleFill,
  RiAddLine,
  RiCheckLine,
} from 'react-icons/ri'
import { SiIos, SiLinux, SiNintendoswitch } from 'react-icons/si'

// Components
import Button from '@components/Button'

// Hooks
import { useCartContext } from '@hooks/useCartContext'
import { useAuthContext } from '@hooks/useAuthContext'

// Types
import { Game } from '@self-types/Game.types'

export interface ICardProduct {
  game: Game
  addToCart: (game: Game) => void
}

const platformIcons: Record<string, React.ReactNode> = {
  web: <RiGlobalLine />,
  pc: <RiWindowsFill />,
  android: <RiAndroidFill />,
  ios: <SiIos />,
  playstation: <RiPlaystationFill />,
  xbox: <RiXboxFill />,
  mac: <RiAppleFill />,
  linux: <SiLinux />,
  nintendo: <SiNintendoswitch />,
}

const CardProduct = ({ game, addToCart }: ICardProduct) => {
  const theme = useTheme()
  const {
    id,
    name,
    price,
    released,
    background_image,
    parent_platforms,
    genres,
  } = game

  const releasedDate = new Date(released).toLocaleDateString()
  const genreList = genres.map((item) => item.name).join(', ')
  const { listCart } = useCartContext()
  const { userSession } = useAuthContext()

  const renderButton = () => {
    if (userSession) {
      return listCart.find((item) => item.id === id) ? (
        <Typography color="whitesmoke" fontWeight={700}>
          Added <RiCheckLine color="whitesmoke" />
        </Typography>
      ) : (
        <Button
          onClick={() => addToCart(game)}
          endIcon={<RiAddLine />}
          variant="text"
          hovercolor={theme.palette.secondary.main}
          sx={{
            padding: 0,
            fontWeight: 700,
            textTransform: 'none',
            color: 'grey',
          }}
        >
          Add to cart
        </Button>
      )
    }

    return (
      <Link to={'/login'}>
        <Typography color="whitesmoke" fontWeight={700} fontSize="15px">
          Please login now.
        </Typography>
      </Link>
    )
  }

  return (
    <Card sx={{ width: 300, borderRadius: 5, backgroundColor: '#1a1a1a' }}>
      <Link to={`/games/${game.id}`}>
        <CardMedia
          component="img"
          height="140"
          image={background_image}
          alt="green iguana"
        />
      </Link>
      <CardContent
        sx={{
          gap: 1.5,
          backgroundColor: '#1a1a1a',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent
          sx={{ display: 'flex', justifyContent: 'space-between', padding: 0 }}
        >
          {renderButton()}
          <Typography color="gray">${price}</Typography>
        </CardContent>
        <Link to={`/games/${game.id}`}>
          <Typography
            variant="h4"
            fontSize={20}
            sx={{ color: theme.palette.common.white, fontWeight: 700 }}
          >
            {name}
          </Typography>
        </Link>
        <Box
          display="flex"
          flexDirection="column"
          gap={1.5}
          alignItems="flex-start"
        >
          {parent_platforms && (
            <Box display="flex" gap="10px">
              {parent_platforms.map(({ platform }) => (
                <SvgIcon
                  key={`${platform.id}-${id}`}
                  sx={{
                    color: theme.palette.common.white,
                    width: 16,
                    height: 16,
                  }}
                >
                  {platformIcons[platform.slug]}
                </SvgIcon>
              ))}
            </Box>
          )}
          <Typography variant="body2" color="gray">
            Released: {releasedDate}
          </Typography>
          <Typography variant="body2" color="gray">
            Genres: {genreList}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardProduct
