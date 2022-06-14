type Data = {
    name: string;
    course: string
}

export function Table(props: { data: Data[] }): JSX.Element {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Registered Course</th>
                </tr>
            </thead>
            <tbody>
                {
                    (props.data.length > 0)
                        ?
                        <RenderTableData data={props.data} />
                        :
                        <tr>
                            <td>No student data available</td>
                            <td>No student data available</td>
                        </tr>}
            </tbody>
        </table>
    )
}

function RenderTableData(props: { data: Data[] }): JSX.Element {
    return (
        <>
            {props.data.map((student: Data) => (
                <tr>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                </tr>
            ))}
        </>
    )
}