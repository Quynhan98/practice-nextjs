import { memo } from 'react'
import Image, { ImageLoader, ImageProps } from 'next/image'

// Utils
import { shimmer, toBase64 } from '@utils/index'

// Services
import imageLoader from '@services/imageLoader'

const ImageBlur = ({ width, height, ...rest }: ImageProps) => {
  return (
    <Image
      width={width}
      height={height}
      placeholder="blur"
      loader={imageLoader as ImageLoader}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmer(width as number, height as number),
      )}`}
      unoptimized
      {...rest}
    />
  )
}

export default memo(ImageBlur)
