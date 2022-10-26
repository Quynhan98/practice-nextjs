// Utils
import { render } from '@utils/testUtils'

// Page
import ListPage from '@pages/index'

describe('List Game Page', () => {
  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: jest.fn(() => ({
        name: 'GTA',
      })),
      useRouteMatch: () => ({ url: '' }),
    }))
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should render CList Game Page', () => {
    const { container } = render(<ListPage />)

    expect(container).toMatchSnapshot()
  })
})
