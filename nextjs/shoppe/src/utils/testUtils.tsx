import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'

// Themes
import { customTheme } from '@themes/index'

export const customRender = (component: ReactNode) => {
  return render(
    <ChakraProvider theme={customTheme}>{component}</ChakraProvider>,
  )
}

export * from '@testing-library/react'
export { customRender as render }
