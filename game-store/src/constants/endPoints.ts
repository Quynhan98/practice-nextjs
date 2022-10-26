export const GAME_ENDPOINT = `${process.env.VITE_API_GAME_ENDPOINT}/games?key=${process.env.VITE_API_KEY}`

export const SEARCH_GAME_ENDPOINT = `${process.env.VITE_API_GAME_ENDPOINT}/games?key=${process.env.VITE_API_KEY}&search=`

export const CART_ENDPOINT = `${process.env.VITE_API_ENDPOINT}/cart`

export const gameDetailEndpoint = (id: string) => {
  const gameDetailUrl = `${process.env.VITE_API_GAME_ENDPOINT}/games/${id}?key=${process.env.VITE_API_KEY}`
  const gameDetailScreenUrl = `${process.env.VITE_API_GAME_ENDPOINT}/games/${id}/screenshots?key=${process.env.VITE_API_KEY}`

  return { gameDetailUrl, gameDetailScreenUrl }
}
