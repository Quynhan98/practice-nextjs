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
import { IAccountRegister } from '@self-types/index'

export interface IRegisterFormProps {
  handleSubmitForm: (data: IAccountRegister) => void
}

const RegisterForm = ({ handleSubmitForm }: IRegisterFormProps) => {
  const theme = useTheme()
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IAccountRegister>()

  const onSubmit: SubmitHandler<IAccountRegister> = (data) => {
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
        Register
      </Typography>
      <Box display="flex" gap={1} alignItems="initial">
        <Box display="flex" flexDirection="column" width="100%">
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: { value: true, message: REQUIRED } }}
            render={({ field }) => (
              <InputStyled
                error={!!errors.firstName}
                helperText={errors.firstName && errors.firstName.message}
                color="primary"
                focused
                variant="standard"
                type="text"
                placeholder="First name"
                {...field}
              />
            )}
          />
        </Box>
        <Box display="flex" flexDirection="column" width="100%">
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: { value: true, message: REQUIRED } }}
            render={({ field }) => (
              <InputStyled
                error={!!errors.lastName}
                helperText={errors.lastName && errors.lastName.message}
                color="primary"
                focused
                variant="standard"
                type="text"
                placeholder="Last name"
                displayline="none"
                {...field}
              />
            )}
          />
        </Box>
      </Box>
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
        Register
      </Button>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={1}
      >
        <Typography color={theme.palette.common.black} fontSize={14}>
          If you already have an account?
        </Typography>
        <Link to="/login">
          <Typography
            paddingLeft={0.5}
            color={theme.palette.info.main}
            fontSize={14}
            fontWeight={500}
          >
            Login now
          </Typography>
        </Link>
      </Box>
    </Box>
  )
}

export default RegisterForm
