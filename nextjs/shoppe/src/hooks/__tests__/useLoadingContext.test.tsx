import React, { useMemo } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button, Heading } from '@chakra-ui/react'

// Contexts
import { ILoadingContext, LoadingContext } from '@contexts/LoadingProvider'

// Hooks
import { useLoadingContext } from '@hooks/useLoadingContext'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useMemo: jest.fn().mockReturnValue({
    loading: true,
    setLoading: jest.fn(),
  }),
}))

const LoadingContextTest = () => {
  const { setLoading, loading } = useLoadingContext()

  return (
    <>
      <Heading>{loading ? 'Loading' : 'Not loading'}</Heading>
      <Button type="button" onClick={() => setLoading(true)}>
        Set loading
      </Button>
    </>
  )
}

it('should get correct loading state', () => {
  const providerProps: ILoadingContext = useMemo(
    () => ({
      loading: true,
      setLoading: jest.fn(),
    }),
    [],
  )

  render(
    <LoadingContext.Provider value={providerProps}>
      <LoadingContextTest />
    </LoadingContext.Provider>,
  )

  expect(screen.getByRole('heading')).toHaveTextContent('Loading')

  fireEvent.click(screen.getByRole('button'))
  expect(providerProps.setLoading).toBeCalled()
})
