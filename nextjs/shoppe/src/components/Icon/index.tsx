import React, { memo } from 'react'
import Image, { ImageLoader } from 'next/image'
import { Box, BoxProps } from '@chakra-ui/react'

// Services
import myImageLoader from '@services/imageLoader'

interface IconProps extends BoxProps {
  srcIcon: string
  alt: string
}

const Icon = ({ srcIcon, alt, ...rest }: IconProps) => {
  return (
    <Box position="relative" display="flex" alignItems="flex-end" {...rest}>
      <Image
        src={srcIcon}
        alt={alt}
        data-testid="image"
        fill
        loader={myImageLoader as ImageLoader}
      />
    </Box>
  )
}

export default memo(Icon)
