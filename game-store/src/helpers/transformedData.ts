import { Game } from '@self-types/Game.types'

export const transformedData = (result: Game[]) => {
  if (!result) {
    return []
  } else {
    return result.map((item) => {
      return {
        ...item,
        price: 19.99,
      }
    })
  }
}
