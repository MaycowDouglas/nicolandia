import PassaporteAntecipado from '@/public/images/tickets/antecipado.jpg'
import PassaporteEncantado from '@/public/images/tickets/encantado.jpg'
import PassaporteEspetacular from '@/public/images/tickets/espetacular.jpg'
import PassaporteIndividual from '@/public/images/tickets/individual.jpg'
import PassaporteNamorados from '@/public/images/tickets/namorados.png'
import Link from 'next/link'
import { BsChevronRight } from 'react-icons/bs'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import PassaportSlide from './PassaportSlide'
SwiperCore.use([Autoplay])

export default function PassaportCarousel() {
  const now = new Date()
  const nowSP = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }))
  const promotionCondition =
    (nowSP.getDay() >= 1 && nowSP.getDay() <= 4) || (nowSP.getDay() === 0 && nowSP.getHours() >= 20)

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
            {/* {promotionCondition ? (
              <PassaportSlide
                price={43.9}
                amount={1}
                name="Passaporte Antecipado"
                background="yellow"
                image={PassaporteAntecipado}
                href="https://pague.yuupe.com/produtos/7"
              />
            ) : (
              <PassaportSlide
                price={64.9}
                amount={1}
                name="Passaporte Individual"
                background="blue"
                image={PassaporteIndividual}
                href="https://pague.yuupe.com/produtos/2"
              />
            )} */}
            <PassaportSlide
              price={64.9}
              amount={1}
              name="Passaporte Individual"
              background="blue"
              image={PassaporteIndividual}
              href="https://pague.yuupe.com/produtos/2"
            />
          </SwiperSlide>

          <SwiperSlide className="max-w-[600px]">
            <PassaportSlide
              price={69.9}
              amount={2}
              background="pink"
              name="Combo Love"
              image={PassaporteNamorados}
              href="https://pague.yuupe.com/produtos/10"
            />
          </SwiperSlide>
          <SwiperSlide className="max-w-[600px]">
            <PassaportSlide
              price={161.9}
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
