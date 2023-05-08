import Head from 'next/head'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { BsFillChatSquareTextFill, BsFillTelephoneFill } from 'react-icons/bs'
import { FiHelpCircle, FiMail, FiPhone } from 'react-icons/fi'

import Footer from './Footer'
import Navbar from './Navbar'

type LayoutProps = {
  title: string
  description: string
  children: ReactNode
}

export default function Layout({ title, description, children }: LayoutProps) {
  const [suportVisible, setSuportVisible] = useState(false)

  function toggle() {
    setSuportVisible(!suportVisible)
  }
  return (
    <>
      {suportVisible && (
        <div
          onClick={() => toggle()}
          className="fixed z-40 top-0 left-0 right-0 bottom-0 bg-dark-30"
        ></div>
      )}

      <Head>
        <title>Nova Nicolândia - {title}</title>
        <meta name="description" content={description} />
      </Head>
      <Navbar />
      <div className="bg-red text-light text-sm text-center py-1">
        <strong>Horário de funcionamento:</strong> sexta de 15h15 às 21h, Sábados, Domingos e
        Feriados de 11h às 20h.
      </div>
      {children}
      <button
        title="Suporte"
        className="fixed bottom-10 right-10 z-50 p-5 flex items-center justify-center gap-5 bg-blue-200 rounded-full text-xl text-light"
        onClick={() => toggle()}
      >
        <BsFillChatSquareTextFill />

        {suportVisible && (
          <>
            <ul className="absolute bottom-full right-10 w-72 py-2 bg-light divide-y-2 divide-dark-10 rounded-lg shadow-xl text-lg text-left text-blue-100">
              <li className="px-5 py-2">
                <Link href="/duvidas-frequentes" className="flex items-center gap-3">
                  <FiHelpCircle />
                  Dúvidas frequentes
                </Link>
              </li>
              {/* <li className="px-5 py-2 flex items-center gap-3">
                <FiMail /> Envie-nos um email
              </li> */}
              <li className="px-5 py-2">
                <Link href="tel:3321-5330" className="flex items-center gap-3">
                  <FiPhone /> Central de atendimento
                </Link>
              </li>
            </ul>
          </>
        )}
      </button>
      <Footer />
    </>
  )
}
