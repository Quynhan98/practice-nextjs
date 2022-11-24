// Utils
import { render, fireEvent, screen } from '@utils/testUtils'

// Components
import Search from '@components/Search'

describe('Search component', () => {
  const props = {
    onClick: jest.fn(),
    onKeyDown: jest.fn(),
    onChange: jest.fn(),
    placeholder: 'Search...',
  }

  it('should render Search', () => {
    const { container } = render(<Search {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('should call onChange Search ', () => {
    render(<Search {...props} />)

    const search = screen.getByRole('textbox') as HTMLInputElement

    fireEvent.change(search, {
      target: { value: 'Search Value' },
    })

    expect(props.onChange).toBeCalled()
    expect(search.value).toBe('Search Value')
  })

  it('should call onClick Icon Search ', () => {
    render(<Search {...props} />)

    const iconSearch = screen.getByRole('button')

    fireEvent.click(iconSearch)
    expect(props.onClick).toBeCalled()
  })

  it('should call onKeyDown after Enter ', () => {
    render(<Search {...props} />)

    const search = screen.getByRole('textbox')
    fireEvent.keyDown(search)

    expect(props.onKeyDown).toBeCalled()
  })
})
