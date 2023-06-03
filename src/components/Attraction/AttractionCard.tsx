import CategoryChildish from '@/public/images/childish.png'
import CategoryFamiliar from '@/public/images/familiar.png'
import CategoryRadical from '@/public/images/radical.png'
import Image, { StaticImageData } from 'next/image'

type AttractionCardProps = {
  name: string
  alert?: string
  image: StaticImageData
  category: 'radical' | 'familiar' | 'childish'
  observation?: string
  restrictions?: {
    minHeight?: number
    maxHeight?: number
    allowCompanion?: boolean
    minHeightWithCompanion?: number
  }
}

export default function AttractionCard({
  name,
  alert,
  image,
  category,
  observation,
  restrictions,
}: AttractionCardProps) {
  const categories = {
    radical: CategoryRadical,
    familiar: CategoryFamiliar,
    childish: CategoryChildish,
  }

  return (
    <article className="relative text-center rounded-lg bg-light p-5 pb-8 shadow-xl">
      <span className="absolute z-10 bg-light p-3 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
        <Image width={50} height={50} src={categories[category]} alt="" />
      </span>
      <header className="relative h-56">
        <Image className="object-center object-cover rounded-lg" src={image} alt={name} fill />
      </header>
      <section className="text-blue-100">
        <h3 className="mt-4 text-lg font-bold uppercase">{name}</h3>
        {restrictions && (
          <div className="mt-4">
            <h4 className="font-bold">Restrições</h4>
            {restrictions.minHeight && (
              <p className="">Altura mínima: {restrictions.minHeight / 100} metros</p>
            )}
            {restrictions.maxHeight && (
              <p className="">Altura mínima: {restrictions.maxHeight / 100} metros</p>
            )}
            {restrictions.allowCompanion && <p>Permite acompanhante adulto</p>}
          </div>
        )}

        {observation && (
          <div className="mt-4">
            <h4 className="font-bold">Observação</h4>
            <p className="text-sm">{observation}</p>
          </div>
        )}

        {alert && <p className="mt-4 font-bold text-red">{alert}</p>}
      </section>
    </article>
  )
}
