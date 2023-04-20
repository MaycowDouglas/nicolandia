import Link from 'next/link'

import Backside, { Props as BacksideProps } from './Backside'
import Frontside, { Props as FrontsideProps } from './Fontside'

type Props = {
  href: string
}

export default function Passaport({
  href,
  name,
  image,
  amount,
  price,
  background,
}: FrontsideProps & BacksideProps & Props) {
  return (
    <Link href={href} className="relative group">
      <Frontside name={name} image={image} />
      <Backside name={name} amount={amount} price={price} background={background} />
    </Link>
  )
}
