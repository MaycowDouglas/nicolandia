import Passaport from '@/components/Passaport'
import PassaporteAntecipado from '@/public/images/tickets/antecipado.png'
import PassaporteEncantado from '@/public/images/tickets/encantado.png'
import PassaporteEspetacular from '@/public/images/tickets/espetacular.png'
import PassaporteIndividual from '@/public/images/tickets/individual.png'
import Link from 'next/link'
import { BsChevronRight } from 'react-icons/bs'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
SwiperCore.use([Autoplay])

export default function Passaports() {
  const today = new Date()
  return (
    <section>
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between">
          <h2 className="font-black text-3xl text-blue-100 mb-5">Passaportes</h2>
          <Link
            href="/ingressos"
            title="Ver todos"
            className="text-red font-bold flex items-center gap-2"
          >
            Ver todos <BsChevronRight />
          </Link>
        </div>
        <Swiper spaceBetween={20} slidesPerView="auto" autoplay={{ delay: 3000 }}>
          <SwiperSlide className="max-w-[600px]">
            {today.getDay() > 1 && today.getDay() < 5 ? (
              <Passaport
                price={39.97}
                amount={1}
                name="Passaporte Antecipado"
                background="yellow"
                image={PassaporteAntecipado}
                href="https://pague.yuupe.com/produtos/7"
              />
            ) : (
              <Passaport
                price={59.97}
                amount={1}
                name="Passaporte Individual"
                background="blue"
                image={PassaporteIndividual}
                href="https://pague.yuupe.com/produtos/2"
              />
            )}
          </SwiperSlide>

          <SwiperSlide className="max-w-[600px]">
            <Passaport
              price={109.97}
              amount={2}
              background="red"
              name="Passaporte Encantado"
              image={PassaporteEncantado}
              href="https://pague.yuupe.com/produtos/3"
            />
          </SwiperSlide>
          <SwiperSlide className="max-w-[600px]">
            <Passaport
              price={149.97}
              amount={3}
              background="green"
              name="Passaporte Espetacular"
              image={PassaporteEspetacular}
              href="https://pague.yuupe.com/produtos/4"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
