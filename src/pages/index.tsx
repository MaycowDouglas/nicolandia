import 'swiper/css'
import 'swiper/css/navigation'

import AttractionCarousel from '@/components/Attraction/AttractionCarousel'
import CTANicoApp from '@/components/CTA/NicoApp'
import Layout from '@/components/Layout'
import MainBanner from '@/components/MainBanner'
import PassaportCarousel from '@/components/Passaport/PassaportCarousel'
import BannerOneMobile from '@/public/images/banners/namorados-mobile.png'
import BannerOneWeb from '@/public/images/banners/namorados-web.png'
import { useRef } from 'react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
SwiperCore.use([Autoplay, Navigation])

export default function HomePage() {
  const swiperRef = useRef<any>(null)

  const stopSlideTransition = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop()
    }
  }

  const startSlideTransition = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start()
    }
  }

  return (
    <Layout
      title="Seu lugar de diversão"
      description="A Nova Nicolândia é um parque de diversões urbano e fechado, garantindo assim a segurança dos visitantes. O mundo da diversão não poderia estar em outro lugar, senão no coração de Brasília. Conheça o nosso parque e apaixone-se!"
    >
      <section>
        <Swiper ref={swiperRef} autoplay={{ delay: 4000 }} modules={[Navigation]} navigation>
          {/* <SwiperSlide>
            <MainBanner
              alt="Diversão para toda a Família!"
              mobile={BannerOneMobile}
              desktop={BannerOneWeb}
            />
          </SwiperSlide> */}
          <SwiperSlide>
            <MainBanner
              isVideo
              mobile="/videos/kabum-mobile.mp4"
              desktop="/videos/kabum-web.mp4"
              onPlay={stopSlideTransition}
              onPause={startSlideTransition}
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
