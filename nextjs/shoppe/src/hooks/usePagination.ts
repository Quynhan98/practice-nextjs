import useSWRInfinite from 'swr/infinite'

export const usePagination = <T>(url: string) => {
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => `${url}page=${index + 1}&limit=6`,
  )

  const paginatedData = data && (data.flat() as T)
  const isLoadingMore =
    (!data && !error) ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isReachingEnd =
    data?.length === 0 || (data && data[data.length - 1]?.length < 6)

  return {
    paginatedData,
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
  }
}
