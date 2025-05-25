'use client'

import { useEffect, useRef } from 'react'

interface VideoPlayerProps {
  src: string
  poster?: string
  autoPlay?: boolean
}

export default function VideoPlayer({ src, poster, autoPlay = false }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [src])

  return (
    <div className="relative w-full aspect-video bg-black">
      <video
        ref={videoRef}
        className="w-full h-full"
        controls
        poster={poster}
        autoPlay={autoPlay}
      >
        <source src={src} type="video/mp4" />
        Il tuo browser non supporta il tag video.
      </video>
    </div>
  )
} 