import { Link } from 'react-router-dom'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Box, Typography, useTheme } from '@mui/material'

// Constants
import {
  INVALID_EMAIL,
  INVALID_PASSWORD,
  REGEX_EMAIL,
  REQUIRED,
} from '@constants/index'

// Components
import Button from '@components/Button'
import { InputStyled } from '@components/Input/InputStyled'

// Types
import { IAccountLogin } from '@self-types/index'

export interface ILoginFormProps {
  handleSubmitForm: (data: IAccountLogin) => void
}

const LoginForm = ({ handleSubmitForm }: ILoginFormProps) => {
  const theme = useTheme()

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IAccountLogin>()

  const onSubmit: SubmitHandler<IAccountLogin> = (data) => {
    handleSubmitForm(data)
  }

  return (
    <Box
      minWidth={350}
      maxWidth={450}
      padding={4}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="initial"
      width="100%"
      bgcolor={theme.palette.common.white}
      borderRadius="5px"
    >
      <Typography
        color={theme.palette.common.black}
        fontWeight={700}
        fontSize={28}
        variant="h3"
        marginBottom={3}
        textAlign="center"
      >
        Login
      </Typography>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: { value: true, message: REQUIRED },
          pattern: { value: REGEX_EMAIL, message: INVALID_EMAIL },
        }}
        render={({ field }) => (
          <InputStyled
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
            color="primary"
            focused
            variant="standard"
            type="text"
            placeholder="Email"
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: { value: true, message: REQUIRED },
          minLength: { value: 8, message: INVALID_PASSWORD },
        }}
        render={({ field }) => (
          <InputStyled
            error={!!errors.password}
            helperText={errors.password && errors.password.message}
            color="primary"
            focused
            variant="standard"
            type="password"
            placeholder="Password"
            {...field}
          />
        )}
      />
      <Button mtop={50} color="primary" type="submit">
        Login
      </Button>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={1}
      >
        <Typography color={theme.palette.common.black} fontSize={14}>
          Don&lsquo;t have an account?
        </Typography>
        <Link to="/register">
          <Typography
            paddingLeft={0.5}
            color={theme.palette.info.main}
            fontSize={14}
            fontWeight={500}
          >
            Register Now
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}

export default LoginForm
