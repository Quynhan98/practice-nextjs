import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image alt="logo" src="/logo.png" width={128} height={77} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninja List</Link>
    </nav>
  )
}

export default NavBar
