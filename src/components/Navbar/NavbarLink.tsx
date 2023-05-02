import Link from 'next/link'
import { HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from 'react'

type NavbarLinkProps = {
  href: string
  title: string
  target?: HTMLAttributeAnchorTarget
  children: ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export default function NavbarLink({ href, title, target, onClick, children }: NavbarLinkProps) {
  return (
    <Link
      href={href}
      title={title}
      target={target}
      onClick={onClick}
      className="inline-flex leading-5 text-blue-100 hover:text-red font-bold"
    >
      {children}
    </Link>
  )
}
