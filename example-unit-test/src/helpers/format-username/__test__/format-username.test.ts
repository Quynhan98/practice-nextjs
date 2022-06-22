import { formatUserName } from ".."

describe('format Username', () => {
  test('formatUsername adds @ at the beginning of the username', () => {
    expect(formatUserName('jc')).toBe('@jc')
  })

  test('if there is @ at the beginning of the username, formatUsername keep the username', () => {
    expect(formatUserName('@jc')).toBe('@jc')
  })
})
