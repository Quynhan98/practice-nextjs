import React, { memo } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

// Components
import ImageComponent from '@components/Image'

interface IconProps extends BoxProps {
  srcIcon: string
  alt: string
}

const Icon = ({ srcIcon, alt, ...rest }: IconProps) => {
  return (
    <Box position="relative" display="flex" alignItems="flex-end" {...rest}>
      <ImageComponent src={srcIcon} alt={alt} data-testid="image" fill />
    </Box>
  )
}

export default memo(Icon)
