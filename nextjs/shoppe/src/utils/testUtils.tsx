import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'

// Themes
import { customTheme } from '@themes/index'

// Contexts
import { CartProvider } from '@contexts/CartProvider'

export const customRender = (component: ReactNode) => {
  return render(
    <ChakraProvider theme={customTheme}>
      <CartProvider>{component}</CartProvider>
    </ChakraProvider>,
  )
}

export * from '@testing-library/react'
export * from '@testing-library/jest-dom'
export { customRender as render }
