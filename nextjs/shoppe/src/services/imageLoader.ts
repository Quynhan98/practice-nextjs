export interface myImageLoaderProps {
  src: string
  width: number
  quality: number
}

export default function myImageLoader({
  src,
  width,
  quality,
}: myImageLoaderProps) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/${src}?w=${width}&q=${
    quality || 75
  }`
}
