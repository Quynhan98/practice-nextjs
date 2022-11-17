import { useEffect, useState } from 'react'

/**
 * useDebounce allows to debounce any fast changing value
 * @param value input value
 * @param delay delay time
 * @returns debouncedValue
 */
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handlerSetTimeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handlerSetTimeout)
    }
  }, [value, delay])

  return debouncedValue
}
