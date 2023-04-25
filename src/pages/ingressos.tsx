import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PassaporteAntecipado from '@/public/images/tickets/antecipado.png'
import PassaporteEncantado from '@/public/images/tickets/encantado.png'
import PassaporteEspetacular from '@/public/images/tickets/espetacular.png'
import PassaporteIndividual from '@/public/images/tickets/individual.png'
import Passaporte from '@/public/images/tickets/ticket.png'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

export default function TicketsPage() {
  const today = new Date()
  return (
    <>
      <Head>
        <title>Nova Nicolândia - Ingressos e Convênios</title>
        <meta
          name="description"
          content="Passaportes individuais, Combos, diversão e muito mais. A Nova Nicolândia é referência em levar alegria e diversão para todo o Distrito Federal e traz benefícios exclusivos para advogados e conveniados da OAB-DF e CAA-DF. Venha e apaixone-se!"
        />
      </Head>

      <Navbar />

      <section className="bg-gray-200 py-8">
        <div className="container">
          <h1 className="text-blue-100 font-black text-center text-3xl md:text-4xl xl:text-5xl leading-tight mb-10">
            Compre seus ingressos <br className="hidden md:block" /> com mais praticidade!
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {today.getDay() > 1 && today.getDay() < 6 ? (
              <div className="relative p-5 rounded-t-2xl overflow-hidden">
                <Image src={Passaporte} alt="" fill className="object-cover object-bottom" />
                <div className="relative z-10">
                  <div>
                    <Image
                      src={PassaporteAntecipado}
                      alt="Passaporte Antecipado, 1 pessoa por 39.97 reais"
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="text-center py-8">
                    <h2 className="text-red text-2xl font-bold">Passaporte Antecipado</h2>

                    <ul className="py-5 space-y-2 text-blue-100">
                      <li className="text-sm">VÁLIDO SOMENTE PARA COMPRAS ONLINE.</li>
                      <li className="text-sm">VÁLIDO DE SEXTA A DOMINGO OU FERIADOS.</li>
                      <li className="text-sm">
                        VÁLIDO SOMENTE DENTRO DO CALENDÁRIO OPERACIONAL DO PARQUE.
                      </li>
                    </ul>

                    <Link
                      target="_blank"
                      href="https://pague.yuupe.com/produtos/7"
                      className="px-7 py-3 bg-red rounded-md flex justify-center items-center gap-3 text-light font-bold tracking-wide"
                    >
                      Comprar <FaChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative p-5 rounded-t-2xl overflow-hidden">
                <Image src={Passaporte} alt="" fill className="object-cover object-bottom" />
                <div className="relative z-10">
                  <div>
                    <Image
                      src={PassaporteIndividual}
                      alt="Passaporte Individual, 1 pessoa por 59.97 reais"
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="text-center py-8">
                    <h2 className="text-red text-2xl font-bold">Passaporte Individual</h2>

                    <ul className="py-5 space-y-2 text-blue-100">
                      <li className="text-sm">VÁLIDO SOMENTE PARA COMPRAS ONLINE.</li>
                      <li className="text-sm">VÁLIDO DE SEXTA A DOMINGO OU FERIADOS.</li>
                      <li className="text-sm">
                        VÁLIDO SOMENTE DENTRO DO CALENDÁRIO OPERACIONAL DO PARQUE.
                      </li>
                    </ul>

                    <Link
                      target="_blank"
                      href="https://pague.yuupe.com/produtos/2"
                      className="px-7 py-3 bg-red rounded-md flex justify-center items-center gap-3 text-light font-bold tracking-wide"
                    >
                      Comprar <FaChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            <div className="relative p-5 rounded-t-2xl overflow-hidden">
              <Image src={Passaporte} alt="" fill className="object-cover object-bottom" />
              <div className="relative z-10">
                <div>
                  <Image
                    src={PassaporteEncantado}
                    alt="Passaporte Encantado, 2 pessoa por 109.97 reais"
                    className="rounded-2xl"
                  />
                </div>
                <div className="text-center py-8">
                  <h2 className="text-red text-2xl font-bold">Passaporte Encantado</h2>

                  <ul className="py-5 space-y-2 text-blue-100">
                    <li className="text-sm">VÁLIDO SOMENTE PARA COMPRAS ONLINE.</li>
                    <li className="text-sm">VÁLIDO DE SEXTA A DOMINGO OU FERIADOS.</li>
                    <li className="text-sm">
                      VÁLIDO SOMENTE DENTRO DO CALENDÁRIO OPERACIONAL DO PARQUE.
                    </li>
                  </ul>

                  <Link
                    href="https://pague.yuupe.com/produtos/3"
                    className="px-7 py-3 bg-red rounded-md flex justify-center items-center gap-3 text-light font-bold tracking-wide"
                  >
                    Comprar <FaChevronRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative p-5 rounded-t-2xl overflow-hidden">
              <Image src={Passaporte} alt="" fill className="object-cover object-bottom" />
              <div className="relative z-10">
                <div>
                  <Image
                    src={PassaporteEspetacular}
                    alt="Passaporte Espetacular, 3 pessoa por 149.97 reais"
                    className="rounded-2xl"
                  />
                </div>
                <div className="text-center py-8">
                  <h2 className="text-red text-2xl font-bold">Passaporte Espetacular</h2>

                  <ul className="py-5 space-y-2 text-blue-100">
                    <li className="text-sm">VÁLIDO SOMENTE PARA COMPRAS ONLINE.</li>
                    <li className="text-sm">VÁLIDO DE SEXTA A DOMINGO OU FERIADOS.</li>
                    <li className="text-sm">
                      VÁLIDO SOMENTE DENTRO DO CALENDÁRIO OPERACIONAL DO PARQUE.
                    </li>
                  </ul>

                  <Link
                    href="https://pague.yuupe.com/produtos/4"
                    className="px-7 py-3 bg-red rounded-md flex justify-center items-center gap-3 text-light font-bold tracking-wide"
                  >
                    Comprar <FaChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
