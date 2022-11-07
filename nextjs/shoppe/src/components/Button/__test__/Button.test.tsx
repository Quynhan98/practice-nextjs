import { fireEvent, render, screen } from '@utils/testUtils'
import Button from '@components/Button'

describe('Button Component', () => {
  const handleClick = jest.fn()

  const mockProps = {
    children: 'Add To Cart',
    onClick: handleClick,
  }
  it('Should show match Button DOM Snapshot', () => {
    const { container } = render(
      <Button variant="primary" size="default" {...mockProps} />,
    )

    expect(container).toMatchSnapshot()
  })

  it('Should call onClick on button ', () => {
    render(<Button variant="primary" size="default" {...mockProps} />)

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(handleClick).toBeCalled()
    expect(handleClick).toBeCalledTimes(1)
  })
})
