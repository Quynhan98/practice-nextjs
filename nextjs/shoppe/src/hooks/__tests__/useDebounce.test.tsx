import { useState } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'

// Utils
import { act, fireEvent, render } from '@utils/testUtils'

// Hooks
import { useDebounce } from '@hooks/useDebounce'

export const TestComponent = () => {
  const [value, setValue] = useState(0)
  const inc = () => {
    setValue(value + 1)
  }
  const debouncedValue = useDebounce(value, 1000)

  return (
    <Box>
      <Button onClick={inc}>Increment</Button>
      <Text data-testid="debouncedValue">{debouncedValue}</Text>
      <Text data-testid="value">{value}</Text>
    </Box>
  )
}

describe('Test useDebounce', () => {
  test('should debounce and only change value when delay time has passed', async () => {
    jest.useFakeTimers()

    const { getByTestId, getByRole } = render(<TestComponent />)
    const incrementButton = getByRole('button', { name: /Increment/i })
    const debouncedValue = getByTestId('debouncedValue')
    const value = getByTestId('value')

    expect(debouncedValue.textContent).toBe('0')
    fireEvent.click(incrementButton)
    expect(value.textContent).toBe('1')
    expect(debouncedValue.textContent).toBe('0')

    act(() => {
      jest.runAllTimers()
    })

    expect(debouncedValue.textContent).toBe('1')
    jest.useRealTimers()
  })
})
