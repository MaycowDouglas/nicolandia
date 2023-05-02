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
import Image from 'next/image'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
SwiperCore.use([Autoplay])

export default function AttractionCarousel() {
  const items = [
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
    <section id="atracoes" className="py-8">
      <div className="container">
        <h2 className="font-black text-3xl text-blue-100 mb-5">Atrações</h2>

        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          allowTouchMove
          draggable
          autoplay={{ delay: 2000 }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="max-w-[240px] bg-gray-200 rounded-xl">
              <div className="relative h-44">
                <Image
                  src={item.image}
                  fill
                  sizes="(min-width: 0) 240px"
                  className="rounded-t-xl"
                  alt={item.title}
                />
              </div>
              <div className="text-center py-5">
                <h3 className="text-blue-100 font-black text-xl">{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
