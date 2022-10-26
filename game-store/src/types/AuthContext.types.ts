import { IAccountLogin } from '@self-types/index'
import { IAccountRegister } from '@self-types/index'
import { UserSession } from '@self-types/index'

export interface AuthContextType {
  login: (account: IAccountLogin) => Promise<void>
  logout: () => void
  userSession: UserSession | null
  register: (account: IAccountRegister) => Promise<void>
}
