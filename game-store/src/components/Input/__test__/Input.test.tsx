import { cleanup, fireEvent, screen } from '@testing-library/react'

// Utils
import { render } from '@utils/testUtils'

// Components
import Input from '@components/Input'

describe('Input component', () => {
  const handleOnChange = jest.fn()

  afterEach(() => {
    cleanup()
  })

  it('should render Input', () => {
    const { container } = render(
      <Input placeholder="Enter here" onChange={handleOnChange} />,
    )

    expect(container).toMatchSnapshot()
  })

  it('should call onChange Input ', () => {
    render(<Input placeholder="Enter here" onChange={handleOnChange} />)

    const input = screen.getByPlaceholderText('Enter here') as HTMLInputElement

    fireEvent.change(input, {
      target: { value: 'Input Value' },
    })

    expect(handleOnChange).toBeCalled()
    expect(input).toHaveValue('Input Value')
  })
})
