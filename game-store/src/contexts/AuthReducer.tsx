import { UserSession } from '@self-types/index'

export enum USER_ACTION {
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
}

interface SetSessionAction {
  type: USER_ACTION.SET_USER
  userSession: UserSession
}

interface RemoveSessionAction {
  type: USER_ACTION.LOGOUT
}

export type UserAction = SetSessionAction | RemoveSessionAction

const AuthReducer = (state: UserSession | null, action: UserAction) => {
  switch (action.type) {
    case USER_ACTION.SET_USER:
      return {
        ...state,
        ...action.userSession,
      }
    case USER_ACTION.LOGOUT:
      return null
    default:
      return state
  }
}

export default AuthReducer
