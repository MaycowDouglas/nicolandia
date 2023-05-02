import Link from 'next/link'
import { HTMLAttributeAnchorTarget, ReactNode } from 'react'

type ButtonLinkProps = {
  href: string
  title: string
  target: HTMLAttributeAnchorTarget
  block?: boolean
  className?: string
  children: ReactNode
}

export default function ButtonLink({
  href,
  title,
  target,
  children,
  block = false,
  className = '',
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      title={title}
      target={target}
      className={`px-7 py-3 inline-flex bg-red rounded-md text-light font-bold tracking-wide ${
        block ? 'w-100' : 'w-auto'
      } ${className}`}
    >
      {children}
    </Link>
  )
}
