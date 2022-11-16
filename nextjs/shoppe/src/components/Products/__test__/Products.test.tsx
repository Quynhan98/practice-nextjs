// Utils
import { render } from '@utils/testUtils'

// Components
import Products from '@components/Products'

// Mocks
import { LIST_PRODUCT } from '@mocks/mockData'

describe('ProductsProps render', () => {
  const props = {
    products: LIST_PRODUCT,
    error: '',
  }

  it('should match data for ProductsProps component', () => {
    const { container } = render(<Products {...props} />)

    expect(container).toMatchSnapshot()
  })
})
