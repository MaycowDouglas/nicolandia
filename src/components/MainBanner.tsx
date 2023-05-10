import Image, { StaticImageData } from 'next/image'

type MainBannerProps = {
  alt: string
  mobile: string | StaticImageData
  desktop: string | StaticImageData
}

export default function MainBanner({ desktop, mobile, alt }: MainBannerProps) {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={mobile}
        fill
        priority
        sizes="(min-width: 0) 100vw"
        className="object-cover md:hidden"
        alt={alt}
      />
      {/* <Image
        src={desktop}
        fill
        priority
        sizes="(min-width: 0) 100vw"
        className="object-cover hidden md:block"
        alt={alt}
      /> */}
      <video
        src="/images/banners/one-web.mp4"
        loop
        muted
        autoPlay
        className="hidden md:block w-full h-auto"
      />
    </div>
  )
}
