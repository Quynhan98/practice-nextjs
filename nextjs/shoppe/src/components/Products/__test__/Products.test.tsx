// Utils
import { render, screen } from '@utils/testUtils'

// Components
import Products from '@components/Products'

// Mocks
import { LIST_PRODUCT } from '@mocks/mockData'
import { SERVER_ERROR } from '@constants/errorMessage'

const props = {
  products: LIST_PRODUCT,
}

describe('Products render', () => {
  it('should match data for Products component', () => {
    const { container } = render(<Products {...props} />)

    expect(container).toMatchSnapshot()

    const nameProducts = screen.getAllByRole('heading', { level: 3 })
    expect(nameProducts.length).toBe(LIST_PRODUCT.length)
  })

  it('Should show error', () => {
    const { container } = render(<Products error={SERVER_ERROR} />)

    expect(container).toMatchSnapshot()
  })
})
