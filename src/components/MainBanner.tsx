import Image, { StaticImageData } from 'next/image'
import { VideoHTMLAttributes, useEffect, useRef } from 'react'

type MainBannerProps = {
  alt: string
  mobile: string | StaticImageData
  desktop: string | StaticImageData
}

export default function MainBanner({ desktop, mobile, alt }: MainBannerProps) {
  const videoWeb = useRef<any>(null)
  const videoMobile = useRef<any>(null)

  useEffect(() => {
    if (videoWeb.current !== null && videoMobile.current !== null) {
      videoWeb.current.muted = false
      videoMobile.current.muted = false
    }

    return () => {
      // Desabilitar o áudio quando o componente for desmontado
      if (videoWeb.current !== null && videoMobile.current !== null) {
        videoWeb.current.muted = true
        videoMobile.current.muted = true
      }
    }
  }, [])

  return (
    <div className="relative w-full h-screen">
      <video
        ref={videoWeb}
        src="/videos/kabum-web.mp4"
        loop
        muted={true}
        autoPlay
        className="hidden md:block w-full h-auto"
      />
      <video
        ref={videoMobile}
        src="/videos/kabum-mobile.mp4"
        loop
        muted={true}
        autoPlay
        className="md:hidden w-full h-auto"
      />
    </div>
  )
}
