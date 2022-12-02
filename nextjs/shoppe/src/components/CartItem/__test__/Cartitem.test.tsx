import { fireEvent, render, screen } from '@utils/testUtils'

// Components
import CartItem from '@components/CartItem'

// Mocks
import { PRODUCT_DETAIL } from '@mocks/mockData'

describe('CartItem component', () => {
  const props = {
    onHandleDeleteCart: jest.fn(),
    ...PRODUCT_DETAIL,
  }

  it('Renders CartItem correctly', () => {
    const { container } = render(<CartItem {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('Should call handle delete', () => {
    render(<CartItem {...props} />)

    const buttonDelete = screen.getByRole('button', {
      name: /delete/i,
    })

    fireEvent.click(buttonDelete)

    expect(props.onHandleDeleteCart).toBeCalled()
    expect(props.onHandleDeleteCart).toBeCalledTimes(1)
  })
})
