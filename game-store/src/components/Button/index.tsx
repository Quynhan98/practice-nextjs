import React from 'react'
import { ButtonProps } from '@mui/material'

// Styles
import { ButtonStyled } from '@components/Button/ButtonStyled'

export interface IButtonProps extends ButtonProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  disable?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  width?: number | string
  height?: number
  type?: 'button' | 'submit' | 'reset'
  hovercolor?: string
  mbottom?: number
  mtop?: number
}

const Button = ({
  children = 'Button',
  disable = false,
  color = 'primary',
  startIcon = false,
  endIcon = false,
  onClick,
  width = '100%',
  height,
  type = 'button',
  hovercolor = 'white',
  ...props
}: IButtonProps) => {
  return (
    <ButtonStyled
      width={width}
      height={height}
      color={color}
      disabled={disable}
      variant="contained"
      startIcon={startIcon ? startIcon : false}
      endIcon={endIcon ? endIcon : false}
      onClick={onClick}
      type={type}
      hovercolor={hovercolor}
      {...props}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button
