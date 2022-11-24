import React, { createContext, useMemo, useState } from 'react'

export interface ILoadingContext {
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const LoadingContext = createContext<ILoadingContext>({
  loading: false,
  setLoading: () => undefined,
})

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [loading, setLoading] = useState(false)

  const value = useMemo(
    () => ({
      loading,
      setLoading: (isLoading: boolean) => setLoading(isLoading),
    }),
    [loading],
  )

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  )
}
