export const validateString = (text: string | number) => {
  if ((text && isNaN(text)) || !text)
    return false
  return true
}
