// Mocks
import { MOCK_GAME_DATA } from '@constants/__mocks__/mockGame'

// Utils
import { render } from '@utils/testUtils'

// Components
import CardProduct, { ICardProduct } from '@components/CardProduct'

describe('Card Product Component', () => {
  const handleAddToCart = jest.fn()

  const props: ICardProduct = {
    game: MOCK_GAME_DATA,
    addToCart: handleAddToCart(),
  }

  it('should render Card Product', () => {
    const { container } = render(<CardProduct {...props} />)

    expect(container).toMatchSnapshot()
  })
})
