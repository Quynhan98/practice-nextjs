import useSWRInfinite from 'swr/infinite'

export const usePagination = <T>(url: string) => {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `${url}page=${index + 1}&limit=6`,
  )

  const paginatedData = data && (data.flat() as T)
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 6)

  return {
    paginatedData,
    error,
    isLoadingMore,
    isEmpty,
    size,
    setSize,
    mutate,
    isValidating,
    isReachingEnd,
  }
}
