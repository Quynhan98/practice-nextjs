import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Box, Snackbar, useTheme } from '@mui/material'

// Components
import RegisterForm from '@components/RegisterForm'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'

// Types
import { IAccountRegister } from '@self-types/index'

const RegisterPage = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { register } = useAuthContext()
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [error, setError] = useState<string>('')

  const handleRegister = async (account: IAccountRegister) => {
    try {
      await register(account)
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
      <RegisterForm handleSubmitForm={handleRegister} />
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

export default RegisterPage
