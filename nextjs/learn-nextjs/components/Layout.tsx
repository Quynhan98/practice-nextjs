import { ReactNode } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="content">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
