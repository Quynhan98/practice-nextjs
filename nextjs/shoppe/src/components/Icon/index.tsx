import React, { memo } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box, BoxProps } from '@chakra-ui/react'

interface IconProps extends BoxProps {
  srcIcon: StaticImageData | string
  alt: string
}

const Icon = ({ srcIcon, alt, ...rest }: IconProps) => {
  return (
    <Box
      as="figure"
      position="relative"
      display="flex"
      alignItems="flex-end"
      {...rest}
    >
      <Image
        src={srcIcon}
        alt={alt}
        data-testid="image"
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </Box>
  )
}

export default memo(Icon)
