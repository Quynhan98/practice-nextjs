import { fireEvent, screen } from '@testing-library/react'

// Utils
import { render } from '@utils/testUtils'

// Components
import CardDetail, { ICardDetailProps } from '@components/CardDetail'

// Mocks
import { MOCK_GAME_DATA } from '@constants/__mocks__/mockGame'

// Types

describe('Card Detail component', () => {
  const props: ICardDetailProps = {
    game: MOCK_GAME_DATA,
  }
  it('should render Card Detail', () => {
    const { container } = render(<CardDetail {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('should run toggle ', () => {
    render(<CardDetail {...props} />)

    const icon = screen.getByRole('button')

    fireEvent.click(icon)

    expect(screen.getByText(props.game.name)).toHaveTextContent(props.game.name)
  })
})
