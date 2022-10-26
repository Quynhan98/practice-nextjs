import { InputProps } from '@mui/material'

// Styles
import { InputStyled } from '@components/Input/InputStyled'

export interface IInputProps extends InputProps {
  displayline?: 'none' | 'block'
  mbottom?: number
}

const Input = ({
  error,
  onChange,
  title,
  displayline,
  placeholder,
  value,
  type,
  mbottom,
  name,
}: IInputProps) => {
  return (
    <InputStyled
      label={title}
      color="primary"
      focused
      placeholder={placeholder}
      variant="standard"
      error={error}
      onChange={onChange}
      displayline={displayline}
      value={value}
      type={type}
      mbottom={mbottom}
      name={name}
    />
  )
}

export default Input
