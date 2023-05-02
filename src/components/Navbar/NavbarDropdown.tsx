import { ReactNode, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

type NavbarDropdownProps = {
  label: string
  children: ReactNode
  show?: boolean
}

export default function NavbarDropdown({ label, children, show = false }: NavbarDropdownProps) {
  const [isOpen, setOpen] = useState<boolean>(show)

  const toggle = () => {
    setOpen(!isOpen)
  }

  return (
    <li className="relative py-4" onClick={() => toggle()}>
      <span className="flex items-center justify-between text-blue-100 font-bold">
        {label} <FaChevronDown />
      </span>
      {isOpen && <ul className="p-3 space-y-2 pt-4 text-base">{children}</ul>}
    </li>
  )
}
