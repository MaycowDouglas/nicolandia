import Image, { StaticImageData } from 'next/image'
import { MutableRefObject, VideoHTMLAttributes, useEffect, useRef, useState } from 'react'
import { FaPlay } from 'react-icons/fa'

import PlayButton from './PlayButton'

type MainBannerProps = {
  alt?: string
  mobile: string | StaticImageData
  desktop: string | StaticImageData
  isVideo?: boolean
  onPlay?: () => void
  onPause?: () => void
}

type SlideVideoProps = {
  mobile: string
  desktop: string
  onPlay: () => void
  onPause: () => void
}

type SlideImageProps = {
  alt?: string
  mobile: string | StaticImageData
  desktop: string | StaticImageData
}

export default function MainBanner({
  alt,
  mobile,
  desktop,
  isVideo,
  onPlay,
  onPause,
}: MainBannerProps) {
  return isVideo && onPlay instanceof Function && onPause instanceof Function ? (
    <SlideVideo
      desktop={desktop as string}
      mobile={mobile as string}
      onPlay={onPlay}
      onPause={onPause}
    />
  ) : (
    <SlideImage desktop={desktop} mobile={mobile} alt={alt} />
  )
}

function SlideImage({ desktop, mobile, alt = '' }: SlideImageProps) {
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 })
  const [imageSource, setImageSource] = useState<string | StaticImageData>('')

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      setImageSize(screenWidth < 768 ? { width: 415, height: 900 } : { width: 1920, height: 950 })
      setImageSource(screenWidth < 768 ? mobile : desktop)
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [desktop, mobile])

  return (
    <div className="relative w-full bg-red">
      <Image
        alt={alt}
        src={imageSource}
        width={imageSize.width}
        height={imageSize.height}
        className="w-full h-auto"
      />
    </div>
  )
}

function SlideVideo({ mobile, desktop, onPlay, onPause }: SlideVideoProps) {
  const videoRef = useRef<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoSource, setVideoSource] = useState<string>('')
  const [playbackTime, setPlaybackTime] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      setVideoSource(screenWidth < 768 ? mobile : desktop)
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [desktop, mobile])

  function handlePlayClick() {
    onPlay()
    setIsPlaying(true)
    videoRef.current.play()
  }

  function handlePause() {
    onPause()
    setIsPlaying(false)
    videoRef.current.currentTime = 0
  }

  return (
    <div className="relative">
      <div
        className={
          isPlaying ? 'hidden' : 'bg-dark bg-opacity-30 absolute top-0 left-0 right-0 bottom-0'
        }
      ></div>
      <PlayButton show={isPlaying} onClick={handlePlayClick} />

      <video
        ref={videoRef}
        src={videoSource}
        className="w-full h-auto"
        onPause={handlePause}
        onTimeUpdate={() => setPlaybackTime(videoRef.current.currentTime)}
      />
    </div>
  )
}
