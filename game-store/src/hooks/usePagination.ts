import { transformedData } from '@helpers/transformedData'
import useSWRInfinite from 'swr/infinite'

export const usePagination = <T>(url: string) => {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) => `${url}&page=${index + 1}`,
  )

  const newData = data?.map((game) => transformedData(game.results))

  const paginatedData = newData ? (newData.flat() as T[]) : []
  const isLoadingInitialData = !newData && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && newData && typeof newData[size - 1] === 'undefined')
  const isEmpty = newData?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (newData && newData[newData.length - 1]?.length < 20)

  return {
    paginatedData,
    error,
    isReachingEnd,
    isLoadingMore,
    isEmpty,
    size,
    setSize,
    mutate,
    isValidating,
  }
}
