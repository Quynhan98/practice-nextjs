// Utils
import { screen, fireEvent, render } from '@utils/testUtils'

// Page
import RegisterPage from '@pages/register'

describe('Register Page', () => {
  const props = {
    email: 'nhanle@gmail.com',
    password: '123456789',
    firstName: 'Le',
    lastName: 'Nhan',
  }

  it('should render Register Page', () => {
    const { container } = render(<RegisterPage />)

    expect(container).toMatchSnapshot()
  })

  it('should call onChange inputs form', async () => {
    render(<RegisterPage />)
    const firstName = screen.getByPlaceholderText('First name')
    const lastName = screen.getByPlaceholderText('Last name')
    const email = screen.getByPlaceholderText('Email')
    const password = screen.getByPlaceholderText('Password')

    fireEvent.change(email, {
      target: { value: props.email },
    })
    fireEvent.change(password, {
      target: { value: props.password },
    })
    fireEvent.change(firstName, {
      target: { value: props.firstName },
    })
    fireEvent.change(lastName, {
      target: { value: props.lastName },
    })

    expect(firstName).toHaveValue(props.firstName)
    expect(lastName).toHaveValue(props.lastName)
    expect(email).toHaveValue(props.email)
    expect(password).toHaveValue(props.password)
  })
})
