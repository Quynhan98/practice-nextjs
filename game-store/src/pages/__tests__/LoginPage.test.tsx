// Utils
import { render, screen, fireEvent } from '@utils/testUtils'

// Page
import LoginPage from '@pages/login'

describe('Login Page', () => {
  const props = {
    email: 'nhanle@gmail.com',
    password: '123456789',
  }

  it('should render Login Page', () => {
    const { container } = render(<LoginPage />)

    expect(container).toMatchSnapshot()
  })

  it('should call onChange inputs form', async () => {
    render(<LoginPage />)
    const email = screen.getByPlaceholderText('Email')
    const password = screen.getByPlaceholderText('Password')

    fireEvent.change(email, {
      target: { value: props.email },
    })

    fireEvent.change(password, {
      target: { value: props.password },
    })

    expect(email).toHaveValue(props.email)
    expect(password).toHaveValue(props.password)
  })
})
