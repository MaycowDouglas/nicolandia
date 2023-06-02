import Image, { StaticImageData } from 'next/image'
import { MutableRefObject, VideoHTMLAttributes, useEffect, useRef, useState } from 'react'
import { FaPlay } from 'react-icons/fa'

type MainBannerProps = {
  alt: string
  mobile: string | StaticImageData
  desktop: string | StaticImageData
}

export default function MainBanner({ desktop, mobile, alt }: MainBannerProps) {
  const videoWeb = useRef<any>(null)
  const videoMobile = useRef<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  function handlePlayClick(ref: any) {
    setIsPlaying(true)
    ref.current.play()
  }

  return (
    <div className="relative w-full bg-red">
      <div
        className={
          isPlaying ? 'hidden' : 'bg-dark bg-opacity-30 absolute top-0 left-0 right-0 bottom-0'
        }
      ></div>
      <button
        className={`z-50 w-32 h-32 hidden md:inline-block ${
          isPlaying ? 'md:hidden' : 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        }`}
        onClick={() => handlePlayClick(videoWeb)}
      >
        <span className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex w-28 h-28 rounded-full bg-light bg-opacity-30 animate-pulse"></span>
        <span className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex w-20 h-20 rounded-full bg-light bg-opacity-50 animate-pulse"></span>
        <FaPlay className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex text-light text-2xl" />
      </button>
      <button
        className={`z-50 w-32 h-32 md:hidden ${
          isPlaying ? 'hidden' : 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        }`}
        onClick={() => handlePlayClick(videoMobile)}
      >
        <span className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex w-28 h-28 rounded-full bg-light bg-opacity-30 animate-pulse"></span>
        <span className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex w-20 h-20 rounded-full bg-light bg-opacity-50 animate-pulse"></span>
        <FaPlay className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex text-light text-2xl" />
      </button>
      <video
        loop
        ref={videoWeb}
        src="/videos/kabum-web.mp4"
        className="hidden md:block w-full h-auto"
      />
      <video
        loop
        ref={videoMobile}
        src="/videos/kabum-mobile.mp4"
        className="md:hidden w-full h-auto"
      />
    </div>
  )
}
