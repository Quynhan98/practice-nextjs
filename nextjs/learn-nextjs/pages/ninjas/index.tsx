import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
import { INinjas } from '../../types'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data: INinjas[] = await res.json()

  return {
    props: { ninjas: data },
  }
}

const Ninjas = ({ ninjas }: { ninjas: INinjas[] }) => {
  console.log(ninjas)

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja: INinjas) => (
        <Link
          className={styles.single}
          href={'/ninjas/' + ninja.id}
          key={ninja.id}
        >
          {ninja.name}
        </Link>
      ))}
    </div>
  )
}

export default Ninjas
