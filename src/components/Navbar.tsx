import NicolandiaRed from '@/public/images/brands/nicolandia-red.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-light py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link href="/" title="Ir para home">
            <Image className="w-auto h-16" src={NicolandiaRed} alt="Nicolândia" />
          </Link>

          <div className="space-x-5">
            <Link
              title="Passaportes"
              href="/#passaportes"
              className="text-red font-bold tracking-wider"
            >
              Passaportes
            </Link>
            <Link title="Atrações" href="/#atracoes" className="text-red font-bold tracking-wider">
              Atrações
            </Link>
            <Link
              title="Atrações"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.nicolandia"
              className="text-red font-bold tracking-wider"
            >
              Baixe o app
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <Link
            target="_blank"
            title="Criar conta"
            href="https://pague.yuupe.com/login#signup"
            className="text-red font-bold tracking-wider"
          >
            Criar conta
          </Link>
          <Link
            target="_blank"
            title="Entrar com a sua conta"
            href="https://pague.yuupe.com/login"
            className="px-7 py-3 bg-red rounded-md text-light font-bold tracking-wide"
          >
            Entrar
          </Link>
        </div>
      </div>
    </nav>
  )
}
