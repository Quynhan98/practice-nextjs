import App from '../App'

// Utils
import { render } from '@utils/testUtils'

describe('App', () => {
  it('should render CList Game Page', () => {
    const { container } = render(<App />)

    expect(container).toMatchSnapshot()
  })
})
