import { memo, ReactNode } from 'react'
import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra,
} from '@chakra-ui/react'

interface ButtonProps extends ButtonPropsChakra {
  children: ReactNode
  variant: 'primary'
  size: 'default' | 'medium' | 'base' | 'small'
}

const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <ButtonChakra variant={variant} {...rest}>
      {children}
    </ButtonChakra>
  )
}

export default memo(Button)
