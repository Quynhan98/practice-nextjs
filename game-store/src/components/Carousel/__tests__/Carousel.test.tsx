// Utils
import { render } from '@utils/testUtils'

// Components
import Carousel from '..'

describe('Carousel component', () => {
  const MOCK_CAROUSEL = [
    {
      pathImage:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
    },
    {
      pathImage:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
    },
    {
      pathImage:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
    },
    {
      pathImage:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
    },
    {
      pathImage:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
    },
  ]

  it('should render Card Detail', () => {
    const { container } = render(<Carousel pathImages={MOCK_CAROUSEL} />)

    expect(container).toMatchSnapshot()
  })
})
