export interface imageLoaderProps {
  src: string
  width: number
  quality: number
}

export default function imageLoader({ src, width, quality }: imageLoaderProps) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/${src}?w=${width}&q=${
    quality || 75
  }`
}
