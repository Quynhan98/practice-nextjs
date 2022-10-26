import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter as Router } from 'react-router-dom'

// Themes
import theme from '@self-types/Themes'

// Contexts
import { AuthProvider } from '@contexts/AuthProvider'
import { CartProvider } from '@contexts/CartProvider'

export const customRender = (component: ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CartProvider>
          <Router>{component}</Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>,
  )
}

export * from '@testing-library/react'
export { customRender as render }
