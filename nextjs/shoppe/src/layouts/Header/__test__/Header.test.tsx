// Utils
import { render } from '@utils/testUtils'

// Components
import Header from '@layouts/Header'

describe('Header render', () => {
  it('Should Header match Snapshot', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })
})
