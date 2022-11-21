import { memo, ReactNode } from 'react'
import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra,
} from '@chakra-ui/react'

interface ButtonProps extends ButtonPropsChakra {
  children: ReactNode
  variant: 'primary' | 'default' | 'small'
  size: 'default' | 'medium' | 'base' | 'small' | 'full'
}

const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <ButtonChakra variant={variant} {...rest}>
      {children}
    </ButtonChakra>
  )
}

export default memo(Button)
