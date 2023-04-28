import Image, { StaticImageData } from 'next/image'

type MainBannerProps = {
  alt: string
  mobile: string | StaticImageData
  desktop: string | StaticImageData
}

export default function MainBanner({ desktop, mobile, alt }: MainBannerProps) {
  return (
    <div className="relative w-full h-screen">
      <Image src={mobile} fill className="object-cover md:hidden" alt={alt} />
      <Image src={desktop} fill className="object-cover hidden md:block" alt={alt} />
    </div>
  )
}
