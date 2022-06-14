import { Table } from "../components/table";


export default {
    title: 'component/Table',
    component: Table
}

const data = [
    {name: 'Nhan', course: 'JavaScript'},
    {name: 'Hoang', course: 'JavaScript'},
    {name: 'Long', course: 'C#'},
    {name: 'Phuoc', course: 'PHP'},
    {name: 'My', course: 'C#'},
]

export const ShowStudent = (): JSX.Element => {
    return (
        <Table data={data}/>
    )
}

export const Empty = (): JSX.Element => {
    return (
        <Table data={[]}/>
    )
}