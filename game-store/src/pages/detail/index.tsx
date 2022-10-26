import useSWR from 'swr'
import { Box, Card, Typography, useTheme } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { RiAddLine, RiCheckLine } from 'react-icons/ri'
import { useCallback } from 'react'

// Components
import CardDetail from '@components/CardDetail'
import Carousell from '@components/Carousel'
import Button from '@components/Button'

// Types
import { Game, IGameScreenshots } from '@self-types/Game.types'

// Hooks
import { useCartContext } from '@hooks/useCartContext'
import { useAuthContext } from '@hooks/useAuthContext'
import { gameDetailEndpoint } from '@constants/endPoints'

interface IShortScreenshots {
  pathImage: string
}

const DetailPage = () => {
  const { id } = useParams()
  const theme = useTheme()
  const navigate = useNavigate()

  const { gameDetailUrl, gameDetailScreenUrl } = gameDetailEndpoint(id!)

  const { data: game } = useSWR<Game>(gameDetailUrl)
  const { data: screenshots } = useSWR<IGameScreenshots>(gameDetailScreenUrl)

  const { listCart, addToCart } = useCartContext()
  const { userSession } = useAuthContext()

  const gameDetail = { ...game, price: 19.99 }

  const shortScreenshots = [] as IShortScreenshots[]

  screenshots?.results.map(
    (image: {
      id: number
      image: string
      width?: number
      height?: number
      is_deleted?: boolean
    }) => shortScreenshots.push({ pathImage: image.image }),
  )

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleAddToCart = useCallback(
    async (games: Game) => {
      await addToCart(
        [...listCart, { ...games, price: 19.99 }],
        userSession?.user.id as string,
      )
    },
    [addToCart, listCart, userSession?.user.id],
  )

  const renderButton = () => {
    if (userSession) {
      return listCart.find((item) => item.id === game?.id) ? (
        <Typography color="whitesmoke" fontWeight={700}>
          Added <RiCheckLine color="whitesmoke" />
        </Typography>
      ) : (
        <Button
          onClick={() => handleAddToCart(game!)}
          endIcon={<RiAddLine />}
          variant="text"
          hovercolor={theme.palette.secondary.main}
          sx={{
            padding: 0,
            fontWeight: 700,
            textTransform: 'none',
            color: 'grey',
            fontSize: 20,
          }}
        >
          Add to cart
        </Button>
      )
    }

    return (
      <Link to={'/login'}>
        <Typography color="whitesmoke" fontWeight={700} fontSize="20px">
          Please login now.
        </Typography>
      </Link>
    )
  }

  return (
    <Box
      className="main"
      display="flex"
      flexDirection="column"
      padding="30px 50px"
    >
      {!game && !screenshots ? (
        <Typography
          variant="h1"
          color={theme.palette.common.white}
          fontSize="18px"
          fontWeight={800}
          marginBottom="30px"
        >
          Loading...
        </Typography>
      ) : (
        <>
          <Box display="flex" justifyContent="space-between" marginBottom={4}>
            <Button
              onClick={handleGoBack}
              variant="text"
              hovercolor={theme.palette.secondary.dark}
              sx={{
                color: theme.palette.common.white,
                fontSize: 24,
                textTransform: 'capitalize',
                fontWeight: 700,
              }}
            >
              <ArrowBackIcon />
              Store
            </Button>
            <Typography
              color={theme.palette.common.white}
              fontWeight={700}
              fontSize={38}
              variant="h3"
              marginBottom={2}
            >
              {game?.name}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" gap={3}>
            <Carousell pathImages={shortScreenshots} />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              minHeight="830px"
            >
              {game && <CardDetail game={game} />}
              <Card
                sx={{
                  backgroundColor: theme.palette.grey[900],
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  padding: 3,
                  justifyContent: 'space-between',
                }}
              >
                <Typography color={theme.palette.common.white} fontWeight={600}>
                  ${gameDetail.price}
                </Typography>
                {renderButton()}
              </Card>
            </Box>
          </Box>
        </>
      )}
    </Box>
  )
}

export default DetailPage
