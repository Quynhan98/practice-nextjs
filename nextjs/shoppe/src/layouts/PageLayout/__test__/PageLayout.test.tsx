// Utils
import { render } from '@utils/testUtils'

// Layouts
import PageLayout from '@layouts/PageLayout'

describe('PageLayout render', () => {
  it('Should PageLayout match Snapshot', () => {
    const { container } = render(<PageLayout>Contents Page</PageLayout>)

    expect(container).toMatchSnapshot()
  })
})
