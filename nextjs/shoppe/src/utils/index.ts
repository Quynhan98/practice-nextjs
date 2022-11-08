export const currencyFormat = (num: number): string => {
  const format = num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

  return `$ ${format}`
}
