import React from 'react'

// Utils
import { fireEvent, render, screen } from '@utils/testUtils'

// Contexts
import { LoadingProvider } from '@contexts/LoadingProvider'

// Hooks
import { useLoadingContext } from '@hooks/useLoadingContext'
import { Button, Heading } from '@chakra-ui/react'

const LoadingProviderTest = () => {
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

it('LoadingProvider should work correctly', () => {
  render(
    <LoadingProvider>
      <LoadingProviderTest />
    </LoadingProvider>,
  )

  expect(screen.getByRole('heading')).toHaveTextContent('Not loading')

  fireEvent.click(screen.getByRole('button'))
  expect(screen.getByRole('heading')).toHaveTextContent('Loading')
})
