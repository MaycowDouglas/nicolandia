import Layout from '@/components/Layout'
import PassaportTicket from '@/components/Passaport/PassaportTicket'
import PassaporteAntecipado from '@/public/images/tickets/antecipado.jpg'
import PassaporteEncantado from '@/public/images/tickets/encantado.jpg'
import PassaporteEspetacular from '@/public/images/tickets/espetacular.jpg'
import PassaporteIndividual from '@/public/images/tickets/individual.jpg'
import PassaporteNamorados from '@/public/images/tickets/namorados.png'
import { GoAlert } from 'react-icons/go'

export default function TicketsPage() {
  const now = new Date()
  const nowSP = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }))

  return (
    <Layout
      title="Ingressos"
      description="Passaportes individuais, Combos, diversão e muito mais. A Nova Nicolândia é referência em levar alegria e diversão para todo o Distrito Federal e traz benefícios exclusivos para advogados e conveniados da OAB-DF e CAA-DF. Venha e apaixone-se!"
    >
      <section className="bg-gray-200 py-8">
        <div className="container">
          <h1 className="text-blue-100 font-black text-center text-3xl md:text-4xl xl:text-5xl leading-tight mb-10">
            Compre seus passaportes <br className="hidden md:block" /> com mais praticidade!
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(nowSP.getDay() >= 1 && nowSP.getDay() <= 4) ||
            (nowSP.getDay() === 0 && nowSP.getHours() >= 20) ? (
              <PassaportTicket
                name="Passaporte Antecipado"
                href="https://pague.yuupe.com/produtos/7"
                image={PassaporteAntecipado}
                price={43.9}
                amount={1}
              />
            ) : (
              <PassaportTicket
                name="Passaporte Individual"
                href="https://pague.yuupe.com/produtos/2"
                image={PassaporteIndividual}
                price={64.9}
                amount={1}
              />
            )}

            <PassaportTicket
              name="Passaporte Encantado"
              href="https://pague.yuupe.com/produtos/3"
              image={PassaporteEncantado}
              price={118.9}
              amount={2}
            />

            <PassaportTicket
              name="Passaporte Espetacular"
              href="https://pague.yuupe.com/produtos/4"
              image={PassaporteEspetacular}
              price={161.9}
              amount={3}
            />
          </div>

          <div className="text-center md:w-1/2 mt-10 mx-auto" id="passaporte-vip">
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
        <div className="container grid grid-cols-1 md:grid-cols-2 text-center lg:text-left gap-10 py-8">
          <div>
            <h3 className="text-3xl text-blue-100 font-black mb-5" id="pagamento-com-boleto">
              Pagamento com boleto
            </h3>
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
            <h3
              className="text-3xl text-blue-100 font-black mb-5"
              id="como-utilizar-o-passaporte-online"
            >
              Como utilizar o passaporte online
            </h3>
            <div className="mb-8">
              <p>
                Anote ou imprima seu código (Yuupe), e valide o mesmo na bilheteria do parque para
                retirar seu passaporte. O sigilo de seu código é de sua responsabilidade, o parque
                não se responsabiliza caso você perca seu código e outra pessoa o utilize em seu
                lugar.
              </p>
            </div>

            <h3
              className="text-3xl text-blue-100 font-black mb-5"
              id="passaportes-bilheteria-do-parque"
            >
              Passaportes bilheteria do parque
            </h3>

            <div className="grid grid-cols-2">
              <div>
                <h4 className="text-xl text-blue-100 font-bold mb-1">Passaporte Mágico</h4>
                <p>Inteira R$ 200,00</p>
                <p>Meia R$ 100,00</p>
              </div>

              <div>
                <h4 className="text-xl text-blue-100 font-bold mb-1">Combo Espetacular</h4>
                <p>3 pessoas R$ 210,00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
