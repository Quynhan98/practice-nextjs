import { useState } from 'react'
import { Alert, Box, Snackbar, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'

// Types
import { IAccountLogin } from '@self-types/index'

// Components
import LoginForm from '@components/LoginForm'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'

const LoginPage = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { login } = useAuthContext()
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [error, setError] = useState<string>('')

  const handleLogin = async (account: IAccountLogin) => {
    try {
      await login(account)
      navigate('/')
    } catch (errors) {
      const errorMsg = errors as unknown as { response: { data: string } }
      setError(errorMsg.response.data)
      setOpenSnackbar(true)
    }
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      paddingBottom={40}
      bgcolor={theme.palette.grey[800]}
    >
      <LoginForm handleSubmitForm={handleLogin} />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default LoginPage
