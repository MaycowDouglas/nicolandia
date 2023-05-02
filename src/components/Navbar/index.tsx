import NavbarLink from '@/components/Navbar/NavbarLink'
import NicolandiaRed from '@/public/images/brands/nicolandia-red.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaTimes, FaBars, FaChevronDown } from 'react-icons/fa'

import NavbarDropdown from './NavbarDropdown'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="fixed z-40 top-0 left-0 right-0 bottom-0 bg-dark-30"
        ></div>
      )}
      <nav className="bg-light py-5">
        <div className="container relative flex items-center justify-between lg:justify-start">
          <Link href="/" title="Ir para home">
            <Image className="w-16" src={NicolandiaRed} alt="Nicolândia" />
          </Link>

          <button
            title={`${showMenu ? 'Fechar' : 'Abrir'} menu`}
            onClick={toggleMenu}
            className="block lg:hidden text-2xl text-gray-600 hover:text-gray-900 focus:text-gray-900"
          >
            {showMenu ? <FaTimes /> : <FaBars />}
          </button>

          <ul className="hidden md:flex gap-6 ml-10">
            <li className="py-3">
              <NavbarLink title="Atrações" href="/atracoes" onClick={() => setShowMenu(false)}>
                Atrações
              </NavbarLink>
            </li>
            <li className="relative group py-3">
              <span className="flex items-center gap-2 text-blue-100 hover:text-red hover:cursor-pointer font-bold">
                Passaportes <FaChevronDown />
              </span>
              <ul className="absolute hidden group-hover:block top-11 left-0 z-30 w-80 divide-y-2 divide-dark-3 bg-light shadow-lg rounded-xl p-5">
                <li className="py-1">
                  <NavbarLink
                    href="/ingressos"
                    title="Compra Online"
                    onClick={() => setShowMenu(false)}
                  >
                    Compra online
                  </NavbarLink>
                </li>
                <li className="py-1">
                  <NavbarLink
                    href="/ingressos/#passaporte-vip"
                    title="Valores no Presencial"
                    onClick={() => setShowMenu(false)}
                  >
                    Passaporte VIP
                  </NavbarLink>
                </li>
                <li className="py-1">
                  <NavbarLink
                    href="/ingressos/#pagamento-com-boleto"
                    title="Pagamentos no boleto"
                    onClick={() => setShowMenu(false)}
                  >
                    Pagamento no boleto
                  </NavbarLink>
                </li>
                <li className="py-1">
                  <NavbarLink
                    href="/ingressos/#passaportes-bilheteria-do-parque"
                    title="passaportes bilheteria do parque"
                    onClick={() => setShowMenu(false)}
                  >
                    Passaportes bilheteria do parque
                  </NavbarLink>
                </li>
                <li className="py-1">
                  <NavbarLink
                    href="/ingressos/#como-utilizar-o-passaporte-online"
                    title="Como usar meu passaporte?"
                    onClick={() => setShowMenu(false)}
                  >
                    Como utilizar o passaporte online?
                  </NavbarLink>
                </li>
              </ul>
            </li>
            <li className="py-3">
              <NavbarLink
                target="_blank"
                title="Baixe o aplicativo"
                href="https://play.google.com/store/apps/details?id=com.nicolandia"
              >
                Baixe o aplicativo
              </NavbarLink>
            </li>
          </ul>
        </div>
      </nav>

      <aside
        className={`fixed z-50 top-0 bottom-0 left-0 overflow-hidden transition-all duration-700 ${
          showMenu ? 'w-3/4 p-6' : 'w-0'
        } bg-light`}
      >
        <Link href="/" title="Ir para home">
          <Image className="w-20" src={NicolandiaRed} alt="Nicolândia" />
        </Link>

        <ul
          className={`divide-y-2 divide-dark-20 text-xl mt-10  ${
            showMenu ? 'opacity-100 transition-all delay-700' : 'opacity-0'
          }`}
        >
          <li className="py-4">
            <NavbarLink title="Atrações" href="" onClick={() => setShowMenu(false)}>
              Atrações
            </NavbarLink>
          </li>
          <NavbarDropdown label="Passaportes" show>
            <li>
              <NavbarLink
                href="/ingressos"
                title="Compra Online"
                onClick={() => setShowMenu(false)}
              >
                Compra online
              </NavbarLink>
            </li>
            <li>
              <NavbarLink
                href="/ingressos/#passaporte-vip"
                title="Valores no Presencial"
                onClick={() => setShowMenu(false)}
              >
                Passaporte VIP
              </NavbarLink>
            </li>
            <li>
              <NavbarLink
                href="/ingressos/#pagamento-com-boleto"
                title="Pagamentos no boleto"
                onClick={() => setShowMenu(false)}
              >
                Pagamento no boleto
              </NavbarLink>
            </li>
            <li>
              <NavbarLink
                href="/ingressos/#passaportes-bilheteria-do-parque"
                title="passaportes bilheteria do parque"
                onClick={() => setShowMenu(false)}
              >
                Passaportes bilheteria do parque
              </NavbarLink>
            </li>
            <li>
              <NavbarLink
                href="/ingressos/#como-utilizar-o-passaporte-online"
                title="Como usar meu passaporte?"
                onClick={() => setShowMenu(false)}
              >
                Como utilizar o passaporte online?
              </NavbarLink>
            </li>
          </NavbarDropdown>
          <li className="py-4">
            <NavbarLink
              target="_blank"
              title="Baixe o aplicativo"
              href="https://play.google.com/store/apps/details?id=com.nicolandia"
            >
              Baixe o aplicativo
            </NavbarLink>
          </li>
        </ul>
      </aside>
    </>
  )
}
