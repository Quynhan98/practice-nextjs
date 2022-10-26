import { fireEvent, screen } from '@testing-library/react'

// Utils
import { render } from '@utils/testUtils'

// Components
import CartItem from '@components/CartItem'
import { MOCK_GAME_DATA } from '@constants/__mocks__/mockGame'

describe('Cart Item component', () => {
  const handleDeleteMock = jest.fn()
  const props = {
    game: MOCK_GAME_DATA,
  }
  it('should render CartItem', () => {
    const { container } = render(
      <CartItem handleDelete={handleDeleteMock} {...props} />,
    )

    expect(container).toMatchSnapshot()
  })

  it('should run function delete ', () => {
    render(<CartItem handleDelete={handleDeleteMock} {...props} />)

    const icon = screen.getByRole('button')

    fireEvent.click(icon)
    expect(handleDeleteMock).toBeCalled()
  })
})
