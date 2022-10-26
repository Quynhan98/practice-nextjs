export interface IUser {
  id: string
  email: string
  password: string
  firstName: string
  lastName: string
}

export type IAccountLogin = Pick<IUser, 'email' | 'password'>

export type IAccountRegister = Omit<IUser, 'id'>

export interface UserSession {
  accessToken: string
  user: Omit<IUser, 'password'>
}
