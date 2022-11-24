// Utils
import { render } from '@utils/testUtils'

// Components
import Header from '@layouts/Header'

// Mocks
import { CARTS_MOCK } from '@mocks/mockData'

describe('Header render', () => {
  it('Should Header match Snapshot', () => {
    const { container } = render(<Header carts={CARTS_MOCK} />)

    expect(container).toMatchSnapshot()
  })
})
