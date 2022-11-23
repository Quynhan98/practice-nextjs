import React, { memo } from 'react'
import Image, { ImageLoader } from 'next/image'
import { Box, BoxProps } from '@chakra-ui/react'

// Services
import imageLoader from '@services/imageLoader'
import { shimmer, toBase64 } from '@utils/index'

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
        loader={imageLoader as ImageLoader}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(190, 300))}`}
      />
    </Box>
  )
}

export default memo(Icon)
