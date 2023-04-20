import Adibra from '@/public/images/brands/adibra.png'
import Cadastur from '@/public/images/brands/cadastur.png'
import Iaapa from '@/public/images/brands/iaapa.webp'
import NicolandiaWhite from '@/public/images/brands/nicolandia-white.svg'
import TurismoResponsavel from '@/public/images/brands/turismo-responsavel.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-blue-100 text-light">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-20 py-8 border-b-2 border-light">
          <h2 className="font-bold tracking-wider text-3xl">Parque associado</h2>
          <div className="flex items-center gap-5">
            <Image
              className="w-auto h-16"
              src={TurismoResponsavel}
              alt="Turismo responsável, limpo e seguro"
            />
            <Image className="w-auto h-16 filter grayscale" src={Iaapa} alt="IAAPA" />
            <Image className="w-auto h-16 filter grayscale" src={Adibra} alt="Adibra" />
            <Image className="w-auto h-12 filter grayscale" src={Cadastur} alt="Cadastur" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-10 py-8">
          <Image className="w-auto h-16" src={NicolandiaWhite} alt="Nicolândia" />

          <div>
            <p>© Copyright 2023 - Nicolândia - Todos os direitos reservados Nicolândia</p>
            <p>
              CNPJ 04.021.270/0001-30 / Parque da Cidade Sarah KubitschekEstacionamento 12 - Asa
              Sul, Brasília/DF
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
