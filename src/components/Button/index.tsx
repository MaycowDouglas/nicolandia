import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type ButtonProps = {
  block: boolean
}

export default function Button({
  title,
  className,
  block,
  ...rest
}: ButtonProps & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button
      className={`px-7 py-3 inline-flex bg-red rounded-md text-light font-bold tracking-wide ${
        block ? 'w-100' : 'w-auto'
      } ${className}`}
      {...rest}
    >
      {title}
    </button>
  )
}
