// Utils
import { render, screen, fireEvent } from '@utils/testUtils'

// Components
import Products from '@components/Products'

// Mocks
import { LIST_PRODUCT } from '@mocks/mockData'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

describe('Products render', () => {
  const props = {
    products: LIST_PRODUCT,
  }

  it('should match data for Products component and call search', () => {
    const { container } = render(<Products {...props} />)

    expect(container).toMatchSnapshot()

    const nameProducts = screen.getAllByRole('heading', { level: 3 })
    expect(nameProducts.length).toBe(LIST_PRODUCT.length)

    const search = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.change(search, {
      target: { value: 'Search Value' },
    })
    expect(search.value).toBe('Search Value')
  })

  it('Should show error', () => {
    const { container } = render(<Products error={SERVER_ERROR} />)

    expect(screen.getByText(SERVER_ERROR)).toHaveTextContent(SERVER_ERROR)
    expect(container).toBeInTheDocument()
  })
})
