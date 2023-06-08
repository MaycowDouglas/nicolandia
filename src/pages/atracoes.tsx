import AttractionCard from '@/components/Attraction/AttractionCard'
import Layout from '@/components/Layout'
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
// import AtractionTrenzinhoEncantado from '@/public/images/atractions/trenzinho-encantado.jpeg'
import AtractionTrenzinhoFazenda from '@/public/images/atractions/trenzinho-fazenda.jpeg'
import AtractionTrenzinhoTour from '@/public/images/atractions/trenzinho-tour.jpeg'
import AtractionWaveBlaster from '@/public/images/atractions/wave-blaster.jpeg'
import AtractionZipZap from '@/public/images/atractions/zip-zap.jpg'

export default function AttractionPage() {
  return (
    <Layout
      title="Atrações"
      description="Conheça nossas atrações! São diversos brinquedos para todas as idades, com muita diversão e segurança para você e sua família!"
    >
      <section className="bg-gray-200 py-8">
        <div className="container">
          <h1 className="text-blue-100 font-black text-center text-3xl md:text-4xl xl:text-5xl leading-tight mb-10">
            Na <span className="text-red">Nicolândia</span>, você <br className="hidden md:block" />
            se diverte de verdade!
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-14">
            <AttractionCard
              name="Super frisbee"
              category="radical"
              image={AtractionSuperFrisbee}
              restrictions={{ minHeight: 140 }}
              observation="Para participar desta atração, você precisa ter mobilidade na parte superior. Esta atração não é recomendada para quem não possui nenhuma mobilidade nos braços."
            />
            <AttractionCard
              name="Rock & Roll"
              category="radical"
              image={AtractionRockRoll}
              restrictions={{ minHeight: 140 }}
              observation="Para participar desta atração, você precisa ter mais flexibilidade na parte inferior. Esta atração não é recomendada para quem não possui nenhuma mobilidade nas pernas."
            />
            <AttractionCard
              name="Tobogã"
              category="radical"
              image={AtractionToboga}
              restrictions={{ minHeight: 120 }}
              observation="Funcionamento nas sextas. Sábados, domingos e feriados à partir de 14h30"
            />
            <AttractionCard
              name="Crazy dance"
              category="radical"
              image={AtractionCrazyDance}
              restrictions={{ minHeight: 120 }}
            />
            <AttractionCard
              name="Colossu's Loop"
              category="radical"
              image={AtractionColossusLoop}
              restrictions={{ minHeight: 130 }}
            />
            <AttractionCard
              name="Disko"
              category="radical"
              image={AtractionDisko}
              restrictions={{ minHeight: 130 }}
            />
            <AttractionCard
              name="Sky flyer"
              category="radical"
              image={AtractionSkyFlyer}
              restrictions={{ minHeight: 130 }}
            />
            <AttractionCard
              name="Roller Coaster"
              category="radical"
              image={AtractionRollerCoaster}
              restrictions={{ minHeight: 130 }}
            />

            <AttractionCard
              name="Minhocão"
              category="familiar"
              image={AtractionMinhocao}
              restrictions={{ minHeight: 130 }}
            />
            <AttractionCard
              name="Pirate Ship"
              category="familiar"
              image={AtractionPirateShip}
              restrictions={{ minHeight: 110 }}
            />
            <AttractionCard
              name="Spook"
              category="familiar"
              image={AtractionSpook}
              restrictions={{ minHeight: 140 }}
            />
            <AttractionCard
              name="Wave Blaster"
              category="familiar"
              image={AtractionWaveBlaster}
              observation="Crianças de 1.20 metros até 1.30 metros tem direito a acompanhante"
            />
            <AttractionCard
              name="Reino Encantado"
              category="familiar"
              image={AtractionReinoEncantado}
              restrictions={{ maxHeight: 140, allowCompanion: true }}
            />
            <AttractionCard
              name="Ferris Wheel"
              category="familiar"
              image={AtractionFerrysWheel}
              restrictions={{ minHeight: 130 }}
              observation="Temos uma cabine adaptada para pessoas cadeirantes, permitindo apenas um acompanhante."
            />
            <AttractionCard
              name="Grand Prix"
              category="familiar"
              image={AtractionGrandPrix}
              observation="Crianças com altura de 0.80cm até 1.30 metros, tem direito a acompanhante.
              Para participar desta atração, você precisa ter mais flexibilidade na parte inferior, por ser um brinquedo que sofre impactos. Lembrando que será necessário um acompanhante para estar pressionando o pedal de aceleração."
            />
            <AttractionCard
              name="Tiro"
              category="familiar"
              image={AtractionTiro}
              observation="Essa atração não faz parte do passaporte. Compra presencialmente no parque"
              alert="R$20,00 por pessoa, 15 tiros"
            />
            <AttractionCard
              name="Trenzinho Tour"
              category="familiar"
              image={AtractionTrenzinhoTour}
              observation="Essa atração não faz parte do passaporte. Compra presencialmente no parque"
              alert="R$ 20,00 por pessoa"
            />

            <AttractionCard
              name="Pescaria"
              category="childish"
              image={AtractionPescaria}
              observation="Essa atração não faz parte do passaporte. Compra presencialmente no parque"
              alert="R$ 20,00 por pessoa"
            />

            <AttractionCard
              name="Carrousel"
              category="childish"
              image={AtractionCarrossel}
              restrictions={{ maxHeight: 140 }}
            />
            <AttractionCard
              name="T-rex"
              category="childish"
              image={AtractionTrex}
              restrictions={{ minHeight: 80 }}
            />
            <AttractionCard
              name="Arena Elástica"
              category="childish"
              image={AtractionArenaElastica}
              restrictions={{ maxHeight: 140 }}
            />
            <AttractionCard
              name="Trem Cavalaria"
              category="childish"
              image={AtractionTremCavalaria}
              restrictions={{ minHeight: 80, maxHeight: 140 }}
            />
            <AttractionCard
              name="Trenzinho Fazenda"
              category="childish"
              image={AtractionTrenzinhoFazenda}
              restrictions={{ minHeight: 80, maxHeight: 130 }}
            />
            <AttractionCard
              name="Trenzinho Circus"
              category="childish"
              image={AtractionTrenzinhoCircus}
              restrictions={{ minHeight: 80, maxHeight: 130 }}
            />
            {/* <AttractionCard
              name="Trenzinho Encantado"
              category="childish"
              image={AtractionTrenzinhoEncantado}
              restrictions={{ minHeight: 80, maxHeight: 130 }}
            /> */}
            <AttractionCard
              name="Zip zap"
              category="childish"
              image={AtractionZipZap}
              restrictions={{ minHeight: 80, maxHeight: 130 }}
            />
            <AttractionCard
              name="Magic Cup"
              category="childish"
              image={AtractionMagicCup}
              restrictions={{ minHeight: 80, maxHeight: 130, allowCompanion: true }}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
