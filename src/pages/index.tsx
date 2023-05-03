import 'swiper/css'

import AttractionCarousel from '@/components/Attraction/AttractionCarousel'
import CTANicoApp from '@/components/CTA/NicoApp'
import Layout from '@/components/Layout'
import MainBanner from '@/components/MainBanner'
import PassaportCarousel from '@/components/Passaport/PassaportCarousel'
import BannerOneMobile from '@/public/images/banners/one-mobile.png'
import BannerOneWeb from '@/public/images/banners/one-web.png'
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
              mobile={BannerOneMobile}
              desktop={BannerOneWeb}
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
