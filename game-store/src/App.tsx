import '../styles/reset.css'
import '../styles/globals.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { SWRConfig } from 'swr'
// Themes
import theme from '@self-types/Themes'

//page
import LoginPage from '@pages/login'
import ListPage from '@pages/index'
import DetailPage from '@pages/detail'
import RegisterPage from '@pages/register'

// Layout
import Header from '@layouts/Header'

// Contexts
import { AuthProvider } from '@contexts/AuthProvider'
import { CartProvider } from '@contexts/CartProvider'
import { swrFetcher } from './helpers'

const Dashboard = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig
        value={{
          fetcher: swrFetcher,
        }}
      >
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Dashboard />}>
                <Route index element={<ListPage />} />
                <Route path="/games/:id" element={<DetailPage />} />
                <Route path="/games/search=:name" element={<ListPage />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </SWRConfig>
    </ThemeProvider>
  )
}

export default App
