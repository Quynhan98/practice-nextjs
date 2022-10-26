import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useReducer,
} from 'react'

// Types
import { AuthContextType } from '@self-types/AuthContext.types'
import { IAccountLogin } from '@self-types/index'
import { IAccountRegister } from '@self-types/index'

// Contexts
import AuthReducer, { USER_ACTION } from '@contexts/AuthReducer'

// Services
import { authLogin, authRegister } from '@services/authService'
import { addGameToCart } from '@services/cartService'

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userSession, dispatch] = useReducer(AuthReducer, {}, () =>
    JSON.parse(localStorage.getItem('userSession') || 'null'),
  )

  const login = useCallback(
    async (account: IAccountLogin) => {
      const response = await authLogin(account)

      dispatch({ type: USER_ACTION.SET_USER, userSession: response.data })
      localStorage.setItem('userSession', JSON.stringify(response.data))
    },
    [dispatch],
  )

  const logout = useCallback(() => {
    dispatch({
      type: USER_ACTION.LOGOUT,
    })

    localStorage.removeItem('userSession')
  }, [dispatch])

  const register = useCallback(
    async (account: IAccountRegister) => {
      const response = await authRegister(account)

      await addGameToCart({ id: response.data.user.id, games: [] })

      dispatch({ type: USER_ACTION.SET_USER, userSession: response.data })
      localStorage.setItem('userSession', JSON.stringify(response.data))
    },
    [dispatch],
  )

  const value = useMemo(
    () => ({
      userSession,
      login,
      logout,
      register,
    }),
    [userSession, login, logout, register],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
