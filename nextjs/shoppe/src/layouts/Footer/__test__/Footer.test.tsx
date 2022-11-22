// Utils
import { render } from '@utils/testUtils'

// Components
import Footer from '@layouts/Footer'

describe('Footer render', () => {
  // jest.mock('@chakra-ui/react', () => {
  //   // --> Original module
  //   const originalModule = jest.requireActual('@chakra-ui/react')

  //   return {
  //     __esModule: true,
  //     ...originalModule,
  //     useMediaQuery: jest.fn().mockImplementation(() => ({
  //       isMobile: true,
  //     })),
  //   }
  // })

  it('Should Footer match Snapshot', () => {
    const { container } = render(<Footer />)

    expect(container).toMatchSnapshot()
  })
})
