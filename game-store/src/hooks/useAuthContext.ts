import { useContext } from 'react'

// Contexts
import { AuthContext } from '@contexts/AuthProvider'
import { AuthContextType } from '@self-types/AuthContext.types'

export const useAuthContext = (): AuthContextType => {
  const authContext = useContext(AuthContext)

  return authContext!
}
