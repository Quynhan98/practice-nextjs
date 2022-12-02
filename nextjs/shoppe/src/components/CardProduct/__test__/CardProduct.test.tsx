// Mocks
import { PRODUCT_ITEM } from '@mocks/mockData'

// Utils
import { render, screen } from '@utils/testUtils'

// Components
import CardProduct from '@components/CardProduct'

describe('CardProduct render', () => {
  it('Should match data for card component', () => {
    const { container } = render(<CardProduct {...PRODUCT_ITEM} />)

    expect(container).toMatchSnapshot()
  })

  it('Should navigate to product details page', () => {
    render(<CardProduct {...PRODUCT_ITEM} />)

    const link = screen.getByRole('link')

    expect(link.getAttribute('href')).toEqual(`/products/${PRODUCT_ITEM.id}`)
    expect(link.textContent).toBe(PRODUCT_ITEM.name)
  })
})
