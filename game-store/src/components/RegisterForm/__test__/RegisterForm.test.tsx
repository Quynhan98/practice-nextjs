import { fireEvent, screen } from '@testing-library/react'

// Utils
import { render } from '@utils/testUtils'

// Components
import RegisterForm from '@components/RegisterForm'

describe('Register Form component', () => {
  const handleSubmit = jest.fn()
  const props = {
    firstName: 'Le',
    lastName: 'Nhan',
    email: 'nhanle@gmail.com',
    password: '123456789',
  }
  it('should render Register form', () => {
    const { container } = render(
      <RegisterForm handleSubmitForm={handleSubmit} />,
    )

    expect(container).toMatchSnapshot()
  })

  it('should call onChange input first name', () => {
    render(<RegisterForm handleSubmitForm={handleSubmit} />)
    const input = screen.getByPlaceholderText('Last name')

    fireEvent.change(input, {
      target: { value: props.firstName },
    })

    expect(input).toHaveValue(props.firstName)
  })

  it('should call onChange input last name', () => {
    render(<RegisterForm handleSubmitForm={handleSubmit} />)
    const input = screen.getByPlaceholderText('First name')

    fireEvent.change(input, {
      target: { value: props.lastName },
    })

    expect(input).toHaveValue(props.lastName)
  })

  it('should call onChange input email', () => {
    render(<RegisterForm handleSubmitForm={handleSubmit} />)
    const input = screen.getByPlaceholderText('Email')

    fireEvent.change(input, {
      target: { value: props.email },
    })

    expect(input).toHaveValue(props.email)
  })

  it('should call onChange input password', () => {
    render(<RegisterForm handleSubmitForm={handleSubmit} />)
    const input = screen.getByPlaceholderText('Password')

    fireEvent.change(input, {
      target: { value: props.password },
    })

    expect(input).toHaveValue(props.password)
  })
})
