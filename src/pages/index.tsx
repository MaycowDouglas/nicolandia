import 'swiper/css'

import AttractionCarousel from '@/components/Attraction/AttractionCarousel'
import CTANicoApp from '@/components/CTA/NicoApp'
import Layout from '@/components/Layout'
import MainBanner from '@/components/MainBanner'
import PassaportCarousel from '@/components/Passaport/PassaportCarousel'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
SwiperCore.use([Autoplay])

export default function HomePage() {
  return (
    <Layout
      title="Seu lugar de diversão"
      description="A Nova Nicolândia é um parque de diversões urbano e fechado, garantindo assim a segurança dos visitantes. O mundo da diversão não poderia estar em outro lugar, senão no coração de Brasília. Conheça o nosso parque e apaixone-se!"
    >
      <section>
        <Swiper autoplay={{ delay: 4000 }}>
          <SwiperSlide>
            <MainBanner
              alt="Diversão para toda a Família!"
              mobile="https://yuupe.com/uploads/552aa143a150078fc62fbd3f1e640cfb.jpeg"
              desktop="https://yuupe.com/uploads/23e84158358d248dfc85554ab86e2352.jpeg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <MainBanner
              alt="Passaporte Sessão Extra, por R$ 50,00 - Todo sábado e domingo a partir das 17h na bilheteria presencial."
              mobile="https://yuupe.com/uploads/4ce6855a3e316aba22559fdc99bca6ae.jpeg"
              desktop="https://yuupe.com/uploads/2b0f16217555626ecd9998ce6e70a8a6.jpeg"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      <PassaportCarousel />

      <CTANicoApp />

      <AttractionCarousel />
    </Layout>
  )
}
