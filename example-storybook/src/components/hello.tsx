export function Hello(Props: {name: string}): JSX.Element {
    return (
        <p>Hello {Props.name}! this is a simple component</p>
    )
}
