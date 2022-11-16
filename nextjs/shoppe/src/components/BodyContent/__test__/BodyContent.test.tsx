// Utils
import { fireEvent, render, screen } from '@utils/testUtils'

// Components
import BodyContent from '@components/BodyContent'

describe('BodyContent render', () => {
  const props = {
    onChange: jest.fn(),
    onKeyDown: jest.fn(),
    onClick: jest.fn(),
  }

  it('should match data for BodyContent component', () => {
    const { container } = render(
      <BodyContent {...props}>List Data</BodyContent>,
    )

    expect(container).toMatchSnapshot()
  })

  it('should call onChange Search ', () => {
    render(<BodyContent {...props}>List Data</BodyContent>)

    const search = screen.getByRole('textbox') as HTMLInputElement

    fireEvent.change(search, {
      target: { value: 'Search Value' },
    })

    expect(props.onChange).toBeCalled()
    expect(search.value).toBe('Search Value')
  })

  it('should call onClick Icon Search ', () => {
    render(<BodyContent {...props}>List Data</BodyContent>)

    const iconSearch = screen.getByRole('button')

    fireEvent.click(iconSearch)
    expect(props.onClick).toBeCalled()
  })

  it('should call onKeyDown after Enter ', () => {
    render(<BodyContent {...props}>List Data</BodyContent>)

    const search = screen.getByRole('textbox')
    fireEvent.keyDown(search)

    expect(props.onKeyDown).toBeCalled()
  })
})
