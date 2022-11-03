import { INinjas } from '../../types'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data: INinjas[] = await res.json()

  const paths = data.map((ninja) => {
    return { params: { id: ninja.id.toString() } }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data: INinjas = await res.json()

  return { props: { ninja: data } }
}

const Details = ({ ninja }: { ninja: INinjas }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  )
}

export default Details
