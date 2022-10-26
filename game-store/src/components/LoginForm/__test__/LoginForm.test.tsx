import { fireEvent, screen } from '@testing-library/react'

// Utils
import { render } from '@utils/testUtils'

// Components
import LoginForm from '@components/LoginForm'

describe('Login Form component', () => {
  const handleSubmit = jest.fn()
  const props = {
    email: 'nhanle@gmail.com',
    password: '123456789',
  }
  it('should render Login form', () => {
    const { container } = render(<LoginForm handleSubmitForm={handleSubmit} />)

    expect(container).toMatchSnapshot()
  })

  it('should call onChange input email', () => {
    render(<LoginForm handleSubmitForm={handleSubmit} />)
    const input = screen.getByPlaceholderText('Email')

    fireEvent.change(input, {
      target: { value: props.email },
    })

    expect(input).toHaveValue(props.email)
  })

  it('should call onChange input password', () => {
    render(<LoginForm handleSubmitForm={handleSubmit} />)
    const input = screen.getByPlaceholderText('Password')

    fireEvent.change(input, {
      target: { value: props.password },
    })

    expect(input).toHaveValue(props.password)
  })
})
