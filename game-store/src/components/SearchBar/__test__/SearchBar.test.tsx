import { fireEvent, screen } from '@testing-library/react'

// Utils
import { render } from '@utils/testUtils'

// Components
import SearchBar from '@components/SearchBar'

describe('SearchBar component', () => {
  const handleChange = jest.fn()
  const handleKeyDown = jest.fn()
  const handleClick = jest.fn()

  it('should render Search', () => {
    const { container } = render(
      <SearchBar
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onchange={handleChange}
        placeholder="Search games..."
      />,
    )

    expect(container).toMatchSnapshot()
  })

  it('should call onChange Search ', () => {
    render(
      <SearchBar
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onchange={handleChange}
        placeholder="Search games..."
      />,
    )

    const search = screen.getByRole('textbox')

    fireEvent.change(search, {
      target: { value: 'Search Value' },
    })

    expect(handleChange).toBeCalled()
    expect(search).toHaveValue('Search Value')
  })

  it('should call onClick Icon Search ', () => {
    render(
      <SearchBar
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onchange={handleChange}
        placeholder="Search games..."
      />,
    )

    const iconSearch = screen.getByRole('button')

    fireEvent.click(iconSearch)
    expect(handleClick).toBeCalled()
  })

  it('should call onKeyDown after Enter ', () => {
    render(
      <SearchBar
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onchange={handleChange}
        placeholder="Search games..."
      />,
    )

    const search = screen.getByRole('textbox')
    fireEvent.keyDown(search)

    expect(handleKeyDown).toBeCalled()
  })
})
