import React, { memo } from 'react'
import { Box, Image, BoxProps } from '@chakra-ui/react'

interface IconProps extends BoxProps {
  srcIcon: string
  alt: string
}

const Icon = ({ srcIcon, alt, ...rest }: IconProps) => {
  return (
    <Box display="flex" alignItems="flex-end" {...rest}>
      <Image src={srcIcon} alt={alt} data-testid="image" />
    </Box>
  )
}

export default memo(Icon)
