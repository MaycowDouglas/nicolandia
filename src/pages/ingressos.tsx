import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
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
import { GoAlert } from 'react-icons/go'

export default function TicketsPage() {
  const now = new Date()
  const nowSP = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }))
  const promotionCondition =
    (nowSP.getDay() >= 0 && nowSP.getDay() <= 3 && nowSP.getHours() >= 20) ||
    (nowSP.getDay() === 4 && nowSP.getHours() <= 23 && nowSP.getMinutes() <= 59)

  return (
    <Layout
      title="Ingressos e Convênios"
      description="Passaportes individuais, Combos, diversão e muito mais. A Nova Nicolândia é referência em levar alegria e diversão para todo o Distrito Federal e traz benefícios exclusivos para advogados e conveniados da OAB-DF e CAA-DF. Venha e apaixone-se!"
    >
      <section className="bg-gray-200 py-8">
        <div className="container">
          <h1 className="text-blue-100 font-black text-center text-3xl md:text-4xl xl:text-5xl leading-tight mb-10">
            Compre seus ingressos <br className="hidden md:block" /> com mais praticidade!
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {promotionCondition ? (
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
                    <h3 className="text-red text-2xl font-bold">Passaporte Antecipado</h3>

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
                    <h3 className="text-red text-2xl font-bold">Passaporte Individual</h3>

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
                  <h3 className="text-red text-2xl font-bold">Passaporte Encantado</h3>

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
                  <h3 className="text-red text-2xl font-bold">Passaporte Espetacular</h3>

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

          <div className="text-center md:w-1/2 mt-10 mx-auto">
            <h2 className="text-blue-100 font-black text-center text-3xl md:text-4xl xl:text-5xl leading-tight mb-5">
              VIP PASS
            </h2>

            <p>
              Cansado de pegar filas? Comprando o seu passaporte você poderá adquirir sua pulseira
              VIP presencialmente na bilheteria do nosso parque por R$50,00. Consulte nossos
              atendentes e garanta já o seu!
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="py-5 flex items-center justify-center gap-4 bg-red text-yellow text-4xl md:text-5xl font-black">
          <GoAlert className="mb-2" /> ATENÇÃO <GoAlert className="mb-2" />
        </h2>
        <div className="container grid grid-cols-2 gap-10 py-8">
          <div>
            <h3 className="text-3xl text-blue-100 font-black mb-5">Pagamento com boleto</h3>
            <div className="space-y-3">
              <p>
                NÃO ENVIAMOS BOLETOS POR E-MAIL. Caso seu boleto não apareça ao finalizar a compra,
                verifique seu CEP, e tente novamente, isso ocorre geralmente quando o CEP é
                inválido;
              </p>
              <p>
                Seu código só será liberado após o boleto ser compensado, o que pode levar até 72h.
                Você receberá seu código por e-mail, você também pode acompanhar suas compras no
                link abaixo:
              </p>
              <p className="font-bold">
                NÃO SERÃO ACEITOS RECIBOS OU COMPROVANTES DE PAGAMENTOS PARA RETIRADA DO PASSAPORTE,
                LIBERAÇÃO APENAS MEDIANTE APRESENTAÇÃO DO CÓDIGO ENVIADO POR E-MAIL OU ACESSANDO
                PELO SITE DA PAGUE.YUUPE.COM
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-3xl text-blue-100 font-black mb-5">
              Ingressos bilheteria do parque
            </h3>

            <h4 className="text-xl text-blue-100 font-bold mb-1">Passaporte Mágico</h4>
            <p>Inteira R$ 200,00</p>
            <p>Meia R$ 100,00</p>

            <h4 className="text-xl text-blue-100 font-bold mt-3 mb-1">Combo Espetacular</h4>
            <p>3 pessoas R$ 210,00</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
