// Utils
import { render } from '@utils/testUtils'

// Page
import DetailPage from '@pages/detail'

describe('Detail Page', () => {
  it('should render Detail Page', () => {
    const { container } = render(<DetailPage />)

    expect(container).toMatchSnapshot()
  })
})
