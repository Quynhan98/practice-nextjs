import { Link, useNavigate } from 'react-router-dom'
import { Box, Drawer, IconButton, Typography, useTheme } from '@mui/material'
import { RiShoppingBag2Line } from 'react-icons/ri'
import PersonIcon from '@mui/icons-material/Person'
import { ChangeEvent, useMemo, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

// Components
import SearchBar from '@components/SearchBar'
import Button from '@components/Button'
import CartItem from '@components/CartItem'

// Types
import { Game } from '@self-types/Game.types'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'
import { useCartContext } from '@hooks/useCartContext'

const Header = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { userSession, logout } = useAuthContext()
  const { listCart, clearAll, deleteItem } = useCartContext()

  const username = useMemo(
    () =>
      userSession &&
      userSession?.user.firstName + ' ' + userSession?.user.lastName,
    [userSession],
  )

  const [valueSearch, setValueSearch] = useState('')
  const [open, setState] = useState(false)

  const cartQuantity = useMemo(() => listCart.length, [listCart.length])

  const totalPrice = useMemo(
    () =>
      listCart.reduce((acc: number, obj: { price: number }) => {
        return acc + obj.price
      }, 0),
    [listCart],
  )

  const toggleDrawer = () => {
    setState((prev) => !prev)
  }

  // Handle Logout
  const handleLogout = () => {
    logout()
  }

  // Handle login
  const handleClickButtonLogin = () => {
    navigate('/login')
  }

  // Handle change search
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value)
  }

  // Handle search when user press enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (valueSearch !== '' && valueSearch !== undefined) {
      if (e.key === 'Enter') {
        navigate(`/games/search=${valueSearch}`)
      }
    } else {
      navigate('/')
    }
  }

  // Handle search when user press submit button
  const handleSubmitSearch = () => {
    if (valueSearch !== '' && valueSearch !== undefined) {
      navigate(`/games/search=${valueSearch}`)
    } else {
      navigate('/')
    }
  }

  // Clear Cart
  const handleClearCart = async () => {
    await clearAll(userSession?.user.id as string)
  }

  // Handler Deleted Item of Cart
  const handleDeletedItemCart = async (game: Game) => {
    const item = listCart.filter((gameItem) => game !== gameItem)

    await deleteItem(item, userSession?.user.id as string)
  }

  // Handle checkout
  const handleCheckout = () => {
    alert(
      `You will checkout with a product quantity of ${cartQuantity} and a total price of $${totalPrice.toFixed(
        2,
      )}`,
    )
  }

  return (
    <Box
      component="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height={80}
      padding="0 50px"
      bgcolor={theme.palette.grey[900]}
    >
      <Link to="/">
        <Typography
          component="h1"
          sx={{ color: theme.palette.common.white }}
          fontSize={25}
          fontWeight={700}
          alignItems="center"
          display="flex"
        >
          <Box
            component="img"
            alt="logo"
            src="/images/logo.svg"
            width={20}
            height={20}
            marginRight={1}
          />
          Game Store
        </Typography>
      </Link>
      <SearchBar
        placeholder="Search games..."
        onKeyDown={handleKeyDown}
        onClick={handleSubmitSearch}
        onchange={handleChangeSearch}
      />
      <Box display="flex" alignItems="center" gap={2}>
        {username ? (
          <>
            <Button onClick={handleLogout} variant="contained">
              Logout
            </Button>
            <Typography
              display="flex"
              alignItems="center"
              color={theme.palette.common.white}
            >
              <PersonIcon fontSize="small" />
              {username}
            </Typography>
          </>
        ) : (
          <Button
            onClick={handleClickButtonLogin}
            color="success"
            variant="contained"
          >
            Login
          </Button>
        )}

        <IconButton
          onClick={toggleDrawer}
          size="small"
          sx={{
            color: theme.palette.common.white,
            display: 'flex',
            gap: 1,
            fontWeight: 700,
          }}
        >
          <RiShoppingBag2Line color={theme.palette.common.white} />
          <Typography color={theme.palette.common.white}>Cart</Typography>
          <Box
            bgcolor={theme.palette.common.white}
            borderRadius={12}
            width={20}
            color={theme.palette.common.black}
          >
            <Typography color={theme.palette.common.black}>
              {cartQuantity}
            </Typography>
          </Box>
        </IconButton>
      </Box>

      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box
          sx={{
            p: 2,
            height: 1,
          }}
          bgcolor={theme.palette.grey[900]}
          width={450}
          position="relative"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop={2}
            padding="0 12px"
          >
            <Typography
              color={theme.palette.common.white}
              fontWeight={700}
              fontSize={30}
              variant="h3"
            >
              {Number(cartQuantity) !== 0
                ? `${cartQuantity} games`
                : 'No games added'}
            </Typography>
            {Number(cartQuantity) !== 0 && (
              <Button
                onClick={handleClearCart}
                variant="text"
                sx={{
                  fontSize: 18,
                  textTransform: 'capitalize',
                }}
              >
                Clear
              </Button>
            )}
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            marginTop={2}
            alignItems="center"
            gap={1}
          >
            {listCart &&
              listCart.map((game, index) => (
                <CartItem
                  key={game.name + index.toString()}
                  game={game}
                  handleDelete={() => handleDeletedItemCart(game)}
                />
              ))}
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            bottom={10}
            position="absolute"
            width="95%"
          >
            <Typography
              color={theme.palette.grey[400]}
              fontWeight={600}
              fontSize={15}
            >
              Total: ${totalPrice.toFixed(2)}
            </Typography>
            <Button
              onClick={handleCheckout}
              variant="text"
              hovercolor={theme.palette.secondary.dark}
              sx={{
                color: theme.palette.common.white,
                fontSize: 24,
                textTransform: 'capitalize',
                fontWeight: 700,
              }}
            >
              Checkout
              <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}

export default Header
