import Link from 'next/link'

type NavbarLinkProps = {
  href: string
  title: string
}

export default function NavbarLink({ href, title }: NavbarLinkProps) {
  return (
    <li>
      <Link
        href={href}
        title={title}
        className="text-blue-100 hover:text-red font-bold tracking-wider"
      >
        {title}
      </Link>
    </li>
  )
}
