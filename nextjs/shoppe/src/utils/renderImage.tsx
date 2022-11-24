import Image, { ImageLoader, ImageProps } from 'next/image'

// Services
import imageLoader from '@services/imageLoader'

// Utils
import { shimmer, toBase64 } from '@utils/index'

export const RenderImage = ({ width, height, ...rest }: ImageProps) => {
  return (
    <Image
      width={width}
      height={height}
      loader={imageLoader as ImageLoader}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmer(width as number, height as number),
      )}`}
      {...rest}
    />
  )
}
