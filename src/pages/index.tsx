import 'swiper/css'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Passaports from '@/components/Passaports'
import AtractionArenaElastica from '@/public/images/atractions/arena-elastica.jpeg'
import AtractionCarrossel from '@/public/images/atractions/carrossel.jpeg'
import AtractionFerrisWheel from '@/public/images/atractions/ferris-wheel.jpeg'
import AtractionGrandPrix from '@/public/images/atractions/grand-prix.jpeg'
import AtractionMagicCup from '@/public/images/atractions/magic-cup.jpeg'
import AtractionMinhocao from '@/public/images/atractions/minhocao.jpeg'
import AtractionPescaria from '@/public/images/atractions/pescaria.jpeg'
import AtractionPirateShip from '@/public/images/atractions/pirate-ship.jpeg'
import AtractionReinoEncantado from '@/public/images/atractions/reino-encantado.jpeg'
import AtractionSpook from '@/public/images/atractions/spook.jpeg'
import AtractionTrex from '@/public/images/atractions/t-rex.jpeg'
import AtractionTiro from '@/public/images/atractions/tiro.jpeg'
import AtractionTobogan from '@/public/images/atractions/tobogan.jpeg'
import AtractionTremCavalaria from '@/public/images/atractions/trem-cavalaria.jpeg'
import AtractionTrenzinhoCircus from '@/public/images/atractions/trenzinho-circus.jpeg'
import AtractionTrenzinhoEncantado from '@/public/images/atractions/trenzinho-encantado.jpeg'
import AtractionTrenzinhoFazenda from '@/public/images/atractions/trenzinho-fazenda.jpeg'
import AtractionTrenzinhoTour from '@/public/images/atractions/trenzinho-tour.jpeg'
import AtractionWaveBlaster from '@/public/images/atractions/wave-blaster.jpeg'
import AtractionZipZap from '@/public/images/atractions/zip-zap.jpeg'
import BannerOneMobile from '@/public/images/banners/one-mobile.png'
import BannerOneWeb from '@/public/images/banners/one-web.png'
import NicoAppDark from '@/public/images/brands/nicoapp-dark.svg'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

export default function HomePage() {
  const atractions = [
    {
      title: 'Arena Elástica',
      image: AtractionArenaElastica,
    },
    {
      title: 'Carrossel',
      image: AtractionCarrossel,
    },
    {
      title: 'Ferris Wheel',
      image: AtractionFerrisWheel,
    },
    {
      title: 'Grand Prix',
      image: AtractionGrandPrix,
    },
    {
      title: 'Magic Cup',
      image: AtractionMagicCup,
    },
    {
      title: 'Minhocao',
      image: AtractionMinhocao,
    },
    {
      title: 'Pescaria',
      image: AtractionPescaria,
    },
    {
      title: 'Pirate Ship',
      image: AtractionPirateShip,
    },
    {
      title: 'Reino Encantado',
      image: AtractionReinoEncantado,
    },
    {
      title: 'Spook',
      image: AtractionSpook,
    },
    {
      title: 'T-Rex',
      image: AtractionTrex,
    },
    {
      title: 'Tiro',
      image: AtractionTiro,
    },
    {
      title: 'Tobogan',
      image: AtractionTobogan,
    },
    {
      title: 'Trem Cavalaria',
      image: AtractionTremCavalaria,
    },
    {
      title: 'Trenzinho Circus',
      image: AtractionTrenzinhoCircus,
    },
    {
      title: 'Trenzinho Encantado',
      image: AtractionTrenzinhoEncantado,
    },
    {
      title: 'Trenzinho Fazenda',
      image: AtractionTrenzinhoFazenda,
    },
    {
      title: 'Trenzinho Tour',
      image: AtractionTrenzinhoTour,
    },
    {
      title: 'Wave Blaster',
      image: AtractionWaveBlaster,
    },
    {
      title: 'Zip Zap',
      image: AtractionZipZap,
    },
  ]

  return (
    <div>
      <Head>
        <title>Nova Nicolândia - Seu lugar de diversão</title>
        <meta
          name="description"
          content="A Nova Nicolândia é um parque de diversões urbano e fechado, garantindo assim a segurança dos visitantes. O mundo da diversão não poderia estar em outro lugar, senão no coração de Brasília. Conheça o nosso parque e apaixone-se!"
        />
      </Head>

      <Navbar />

      <section>
        <Swiper>
          <SwiperSlide className="">
            <div className="relative w-full h-screen">
              <Image src={BannerOneWeb} fill className="object-cover" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <Passaports />

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

      <section id="atracoes" className="py-8">
        <div className="container">
          <h2 className="font-black text-3xl text-blue-100 mb-5">Atrações</h2>

          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            allowTouchMove
            touchRatio={0.5}
            touchEventsTarget="wrapper"
            draggable
          >
            {atractions.map((a, index) => (
              <SwiperSlide key={index} className="max-w-[240px] bg-gray-200 rounded-xl">
                <div className="relative h-44">
                  <Image src={a.image} fill className="rounded-t-xl" alt={a.title} />
                </div>
                <div className="text-center py-5">
                  <h3 className="text-blue-100 font-black text-xl">{a.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  )
}
