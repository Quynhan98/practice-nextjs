// Utils
import { render } from '@utils/testUtils'

// Components
import Footer from '@layouts/Footer'

describe('Footer render', () => {
  it('Should Footer match Snapshot', () => {
    const { container } = render(<Footer />)

    expect(container).toMatchSnapshot()
  })
})
