import NicoAppDark from '@/public/images/brands/nicoapp-dark.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function CTANicoApp() {
  return (
    <section className="flex bg-gray-200 py-8 text-center lg:text-left">
      <div className="container flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-10 xl:gap-14">
        <Image src={NicoAppDark} alt="Nico App" />
        <div>
          <h2 className="font-black text-blue-100 text-3xl xl:text-4xl">
            Confira ainda mais opções <br className="hidden lg:inline" /> no nosso app
          </h2>
          <p className="text-gray">Garanta descontos exlclusivos no nosso app</p>
        </div>
        <Link
          className="px-7 py-3 bg-red rounded-md text-light font-bold tracking-wide"
          href="https://play.google.com/store/apps/details?id=com.nicolandia"
        >
          Baixe o Nicoapp
        </Link>
      </div>
    </section>
  )
}
