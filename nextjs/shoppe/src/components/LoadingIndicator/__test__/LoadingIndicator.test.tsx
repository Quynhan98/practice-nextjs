import { render } from '@utils/testUtils'

import LoadingIndicator from '@components/LoadingIndicator'

describe('LoadingIndicator component', () => {
  it('should be renders loading indicator snapshot', () => {
    const { container } = render(<LoadingIndicator />)

    expect(container).toMatchSnapshot()
  })
})
