import { render } from '@utils/testUtils'

// Constants
import { NAV_LIST } from '@constants/index'

// Components
import NavBar from '@components/NavBar'

describe('NavBar component', () => {
  it('Renders NavBar correctly', () => {
    const { container } = render(<NavBar navList={NAV_LIST} />)
    expect(container).toMatchSnapshot()
  })
})
