import Passaporte from '@/public/images/tickets/ticket.png'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

type PassaportTicketProps = {
  image: StaticImageData
  name: string
  amount: number
  price: number
  href: string
}

export default function PassaportTicket({
  image,
  name,
  amount,
  price,
  href,
}: PassaportTicketProps) {
  return (
    <div className="relative p-5 rounded-t-2xl overflow-hidden">
      <Image src={Passaporte} alt="" fill className="object-cover object-bottom" />
      <div className="relative z-10">
        <div>
          <Image
            src={image}
            alt={`${name}, ${amount} pessoa${amount > 1 && 's'} por ${price} reais`}
            className="rounded-2xl"
          />
        </div>
        <div className="text-center py-8">
          <h3 className="text-red text-2xl font-bold">{name}</h3>

          <ul className="py-5 space-y-2 text-blue-100">
            <li className="text-sm">VÁLIDO POR 30 DIAS.</li>
            <li className="text-sm">VÁLIDO SOMENTE PARA COMPRAS ONLINE.</li>
            <li className="text-sm">VÁLIDO DE SEXTA A DOMINGO OU FERIADOS.</li>
            <li className="text-sm">VÁLIDO SOMENTE DENTRO DO CALENDÁRIO OPERACIONAL DO PARQUE.</li>
          </ul>

          <Link
            target="_blank"
            href={href}
            className="px-7 py-3 bg-red rounded-md flex justify-center items-center gap-3 text-light font-bold tracking-wide"
          >
            Comprar <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  )
}
