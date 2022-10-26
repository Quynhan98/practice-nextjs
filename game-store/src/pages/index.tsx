import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography, useTheme } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'

// Types
import { Game } from '@self-types/Game.types'

// Constants
import { GAME_ENDPOINT, SEARCH_GAME_ENDPOINT } from '@constants/index'

// Components
import CardProduct from '@components/CardProduct'

// Hooks
import { usePagination } from '@hooks/usePagination'
import { useCartContext } from '@hooks/useCartContext'
import { useAuthContext } from '@hooks/useAuthContext'

const ListPage = () => {
  const theme = useTheme()
  const { name } = useParams()
  const { listCart, addToCart } = useCartContext()
  const { userSession } = useAuthContext()
  const {
    paginatedData: games,
    error,
    size,
    setSize,
    isEmpty,
    isReachingEnd,
  } = usePagination<Game>(
    name === undefined ? GAME_ENDPOINT : `${SEARCH_GAME_ENDPOINT}${name}`,
  )

  // Handler add to cart
  const handleAddToCart = useCallback(
    async (game: Game) => {
      await addToCart([...listCart, game], userSession?.user.id as string)
    },
    [addToCart, listCart, userSession?.user.id],
  )

  const renderContent = () => {
    if (error) {
      return (
        <Typography
          variant="h1"
          color={theme.palette.common.white}
          fontSize="18px"
          fontWeight={800}
          marginBottom="30px"
        >
          Something is wrong!
        </Typography>
      )
    }

    if (isEmpty) {
      return (
        <Typography
          variant="h1"
          color={theme.palette.common.white}
          fontSize="18px"
          fontWeight={800}
          marginBottom="30px"
        >
          Game not found
        </Typography>
      )
    }

    if (games) {
      return (
        <InfiniteScroll
          next={() => setSize(size + 1)}
          hasMore={!isReachingEnd}
          loader={
            <Typography
              variant="h1"
              color={theme.palette.common.white}
              fontSize="18px"
              fontWeight={800}
              marginBottom="30px"
            >
              Loading...
            </Typography>
          }
          dataLength={games.length ?? 0}
        >
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-around"
            gap={4}
          >
            {games.map((game) => (
              <Box
                key={`${game.id}-${game.id}`}
                display="flex"
                justifyContent="space-between"
              >
                <CardProduct
                  game={game}
                  addToCart={() => handleAddToCart(game)}
                />
              </Box>
            ))}
          </Box>
        </InfiniteScroll>
      )
    }
  }
  return (
    <Box className="main" padding="10px 50px">
      <Typography
        variant="h1"
        color={theme.palette.common.white}
        fontSize={58}
        fontWeight={800}
        marginBottom="30px"
      >
        Best of All Time
      </Typography>

      {renderContent()}
    </Box>
  )
}

export default ListPage
