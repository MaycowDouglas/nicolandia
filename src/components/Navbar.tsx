import NicolandiaRed from '@/public/images/brands/nicolandia-red.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="bg-light py-5">
      <div className="container relative flex items-center justify-between lg:justify-start">
        <Link href="/" title="Ir para home">
          <Image className="w-16 lg:w-24" src={NicolandiaRed} alt="Nicolândia" />
        </Link>

        <button
          onClick={toggleMenu}
          className="block lg:hidden text-2xl text-gray-600 hover:text-gray-900 focus:text-gray-900"
        >
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`absolute lg:static z-50 left-0 top-16 p-5 lg:p-0 space-y-3 lg:space-y-0 w-screen lg:flex lg:justify-between lg:items-center bg-light text-center ${
            showMenu ? 'block' : 'hidden'
          }`}
        >
          <ul className="space-y-3 lg:flex lg:items-center lg:space-y-0 lg:space-x-5 lg:ml-10">
            <li>
              <Link
                title="Passaportes"
                href="/ingressos"
                className="text-red font-bold tracking-wider"
              >
                Passaportes
              </Link>
            </li>
            <li>
              <Link
                title="Atrações"
                href="/#atracoes"
                className="text-red font-bold tracking-wider"
              >
                Atrações
              </Link>
            </li>
            <li>
              <Link
                title="Atrações"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.nicolandia"
                className="text-red font-bold tracking-wider"
              >
                Baixe o app
              </Link>
            </li>
          </ul>

          <ul className="space-y-3 lg:flex lg:items-center lg:space-y-0 lg:space-x-5">
            <li>
              <Link
                target="_blank"
                title="Criar conta"
                href="https://pague.yuupe.com/login#signup"
                className="text-red font-bold tracking-wider"
              >
                Criar conta
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                title="Entrar com a sua conta"
                href="https://pague.yuupe.com/login"
                className="px-7 py-3 bg-red rounded-md inline-flex text-light font-bold tracking-wide"
              >
                Entrar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
