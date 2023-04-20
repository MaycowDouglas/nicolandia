import Image, { StaticImageData } from 'next/image'

export type Props = {
  name: string
  image: StaticImageData
}

export default function Frontside({ name, image }: Props) {
  return (
    <div className="transition-all duration-500 rotate-y-0 group-hover:opacity-0 group-hover:rotate-y-180">
      <Image className="rounded-xl" src={image} alt={name} />
    </div>
  )
}
