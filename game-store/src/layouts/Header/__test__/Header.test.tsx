// Utils
import { fireEvent, render, screen } from '@utils/testUtils'
import fetchMock from 'jest-fetch-mock'

// Layouts
import Header from '@layouts/Header'

beforeEach(async function () {
  fetchMock.resetMocks()
})

const mockHandleLogout = jest.fn()
const mockHandleLogin = jest.fn()
const mockHandleChangeSearch = jest.fn()
const mockHandleKeyDown = jest.fn()
const mockHandleSubmitSearch = jest.fn()

describe('Header layout', () => {
  jest.mock('@layouts/Header', () => ({
    handleLogout: mockHandleLogout(),
    handleLogin: mockHandleLogin(),
    handleChangeSearch: mockHandleChangeSearch(),
    handleKeyDown: mockHandleKeyDown(),
    handleSubmitSearch: mockHandleSubmitSearch(),
  }))
  it('Header default  matchers DOM Snapshot', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })

  it('Header with login account  matchers DOM Snapshot', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })

  it('Input shows the correct value entered from the keyboard', () => {
    render(<Header />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, {
      target: { value: 'GTA' },
    })

    expect(input).toHaveValue('GTA')
  })
})
