import AtractionArenaElastica from '@/public/images/atractions/arena-elastica.jpeg'
import AtractionCarrossel from '@/public/images/atractions/carrossel.jpg'
import AtractionColossusLoop from '@/public/images/atractions/colossus-loop.jpeg'
import AtractionCrazyDance from '@/public/images/atractions/crazy-dance.jpeg'
import AtractionDisko from '@/public/images/atractions/disko.jpg'
import AtractionFerrysWheel from '@/public/images/atractions/ferrys-wheel.jpg'
import AtractionGrandPrix from '@/public/images/atractions/grand-prix.jpg'
import AtractionMagicCup from '@/public/images/atractions/magic-cup.jpg'
import AtractionMinhocao from '@/public/images/atractions/minhocao.jpeg'
import AtractionPescaria from '@/public/images/atractions/pescaria.jpeg'
import AtractionPirateShip from '@/public/images/atractions/pirate-ship.jpeg'
import AtractionReinoEncantado from '@/public/images/atractions/reino-encantado.jpg'
import AtractionRockRoll from '@/public/images/atractions/rock-roll.jpg'
import AtractionRollerCoaster from '@/public/images/atractions/roller-coaster.jpeg'
import AtractionSkyFlyer from '@/public/images/atractions/sky-flyer.jpeg'
import AtractionSpook from '@/public/images/atractions/spook.jpeg'
import AtractionSuperFrisbee from '@/public/images/atractions/super-frisbee.jpeg'
import AtractionTrex from '@/public/images/atractions/t-rex.jpeg'
import AtractionTiro from '@/public/images/atractions/tiro.jpeg'
import AtractionToboga from '@/public/images/atractions/toboga.jpg'
import AtractionTremCavalaria from '@/public/images/atractions/trem-cavalaria.jpg'
import AtractionTrenzinhoCircus from '@/public/images/atractions/trenzinho-circus.jpeg'
import AtractionTrenzinhoEncantado from '@/public/images/atractions/trenzinho-encantado.jpeg'
import AtractionTrenzinhoFazenda from '@/public/images/atractions/trenzinho-fazenda.jpeg'
import AtractionTrenzinhoTour from '@/public/images/atractions/trenzinho-tour.jpeg'
import AtractionWaveBlaster from '@/public/images/atractions/wave-blaster.jpeg'
import AtractionZipZap from '@/public/images/atractions/zip-zap.jpg'
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
      title: 'Colossus Loop',
      image: AtractionColossusLoop,
    },
    {
      title: 'Crazy Dance',
      image: AtractionCrazyDance,
    },
    {
      title: 'Disko',
      image: AtractionDisko,
    },
    {
      title: 'Ferrys Wheel',
      image: AtractionFerrysWheel,
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
      title: "Rock n' Roll",
      image: AtractionRockRoll,
    },
    {
      title: 'Roller Coaster',
      image: AtractionRollerCoaster,
    },
    {
      title: 'Sky Flyer',
      image: AtractionSkyFlyer,
    },
    {
      title: 'Spook',
      image: AtractionSpook,
    },
    {
      title: 'Super Frisbee',
      image: AtractionSuperFrisbee,
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
      title: 'Tobogã',
      image: AtractionToboga,
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
            <SwiperSlide key={index} className="max-w-[320px] bg-gray-200 rounded-xl">
              <div className="relative h-52">
                <Image
                  src={item.image}
                  fill
                  sizes="(min-width: 0) 240px"
                  className="rounded-t-xl object-cover object-center"
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
