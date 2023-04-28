import Link from 'next/link'

type ButtonLinkProps = {
  href: string
  title: string
  block: boolean
  className: string
}

export default function ButtonLink({ title, className, block, href }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`px-7 py-3 inline-flex bg-red rounded-md text-light font-bold tracking-wide ${
        block ? 'w-100' : 'w-auto'
      } ${className}`}
    >
      {title}
    </Link>
  )
}
