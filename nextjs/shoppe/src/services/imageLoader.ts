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
  return `${src}?w=${width}&q=${quality || 75}`
}
