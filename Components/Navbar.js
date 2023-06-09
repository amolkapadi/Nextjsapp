import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
    <ul>
      <li>
      <Link href="/home">Home</Link>
      </li>
      <li>
      <Link href="/about">About</Link>
      </li>
      <li>
      <Link href="/blog">Blog</Link>
      </li>
      <li>
      <Link href="/contact">Contact</Link>
      </li>
    </ul>
</nav>
  )
}
